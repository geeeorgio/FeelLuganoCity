import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useMemo, useReducer, useRef } from 'react';
import type { ImageSourcePropType } from 'react-native';

import type { GradientVariant } from 'src/constants';
import {
  GUIDE_IMAGES,
  LUGANO_QUIZ,
  QUIZ_RESULTS,
  TIMER_SECONDS,
  TOTAL_QUESTIONS,
} from 'src/constants';
import type { QuizState, QuizType, RootStackNavigationProp } from 'src/types';
import { shuffleArray } from 'src/utils';

type QuizReducerState = {
  quizState: QuizState;
  currentIndex: number;
  correctCount: number;
  wrongCount: number;
  timeLeft: number;
  showHint: boolean;
  selectedAnswer: string | null;
  isAnswered: boolean;
  shuffledQuestions: QuizType[];
};

type QuizAction =
  | { type: 'START'; shuffledQuestions: QuizType[] }
  | { type: 'ANSWER'; option: string }
  | { type: 'SHOW_HINT' }
  | { type: 'TICK' }
  | { type: 'TIME_UP' }
  | { type: 'NEXT_QUESTION' }
  | { type: 'SHOW_RESULTS' }
  | { type: 'RESET' };

const initialQuizState: QuizReducerState = {
  quizState: 'welcome',
  currentIndex: 0,
  correctCount: 0,
  wrongCount: 0,
  timeLeft: TIMER_SECONDS,
  showHint: false,
  selectedAnswer: null,
  isAnswered: false,
  shuffledQuestions: LUGANO_QUIZ,
};

function quizReducer(
  state: QuizReducerState,
  action: QuizAction,
): QuizReducerState {
  switch (action.type) {
    case 'START':
      return {
        ...initialQuizState,
        quizState: 'playing',
        shuffledQuestions: action.shuffledQuestions,
      };

    case 'ANSWER': {
      if (state.isAnswered) return state;
      const isCorrect =
        action.option ===
        state.shuffledQuestions[state.currentIndex]?.correctValue;
      return {
        ...state,
        selectedAnswer: action.option,
        isAnswered: true,
        correctCount: isCorrect ? state.correctCount + 1 : state.correctCount,
        wrongCount: !isCorrect ? state.wrongCount + 1 : state.wrongCount,
      };
    }

    case 'SHOW_HINT':
      return { ...state, showHint: true };

    case 'TICK':
      return { ...state, timeLeft: Math.max(state.timeLeft - 1, 0) };

    case 'TIME_UP':
      if (state.isAnswered) return state;
      return {
        ...state,
        isAnswered: true,
        wrongCount: state.wrongCount + 1,
      };

    case 'NEXT_QUESTION':
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        timeLeft: TIMER_SECONDS,
        showHint: false,
        selectedAnswer: null,
        isAnswered: false,
      };

    case 'SHOW_RESULTS':
      return { ...state, quizState: 'results' };

    case 'RESET':
      return initialQuizState;

    default:
      return state;
  }
}

export const useQuizLogic = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [state, dispatch] = useReducer(quizReducer, initialQuizState);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const transitionRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const {
    quizState,
    currentIndex,
    correctCount,
    wrongCount,
    timeLeft,
    showHint,
    selectedAnswer,
    isAnswered,
    shuffledQuestions,
  } = state;

  const currentQuestion = shuffledQuestions[currentIndex];

  const shuffledOptions = useMemo(
    () => shuffleArray(currentQuestion?.options || []),
    [currentQuestion],
  );

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (transitionRef.current) clearTimeout(transitionRef.current);
    };
  }, []);

  useEffect(() => {
    if (quizState !== 'playing' || isAnswered) return;

    timerRef.current = setInterval(() => {
      dispatch({ type: 'TICK' });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [quizState, currentIndex, isAnswered]);

  useEffect(() => {
    if (timeLeft <= 0 && quizState === 'playing' && !isAnswered) {
      dispatch({ type: 'TIME_UP' });
    }
  }, [timeLeft, quizState, isAnswered]);

  useEffect(() => {
    if (!isAnswered || quizState !== 'playing') return;

    transitionRef.current = setTimeout(() => {
      if (currentIndex + 1 >= TOTAL_QUESTIONS) {
        dispatch({ type: 'SHOW_RESULTS' });
      } else {
        dispatch({ type: 'NEXT_QUESTION' });
      }
    }, 1500);

    return () => {
      if (transitionRef.current) clearTimeout(transitionRef.current);
    };
  }, [isAnswered, currentIndex, quizState]);

  const clearTimers = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (transitionRef.current) clearTimeout(transitionRef.current);
  }, []);

  const handleStart = useCallback(() => {
    dispatch({
      type: 'START',
      shuffledQuestions: shuffleArray(LUGANO_QUIZ),
    });
  }, []);

  const handleAnswer = useCallback((option: string) => {
    dispatch({ type: 'ANSWER', option });
  }, []);

  const handleHint = useCallback(() => {
    dispatch({ type: 'SHOW_HINT' });
  }, []);

  const resetQuiz = useCallback(() => {
    clearTimers();
    dispatch({ type: 'RESET' });
  }, [clearTimers]);

  const handleBack = useCallback(() => {
    if (quizState === 'playing') {
      clearTimers();
      dispatch({ type: 'RESET' });
    } else {
      navigation.goBack();
    }
  }, [quizState, navigation, clearTimers]);

  const handleStartExploring = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'MainStack' }],
    });
  }, [navigation]);

  const getResultData = useCallback(() => {
    return (
      QUIZ_RESULTS.find(
        (r) => correctCount >= r.minScore && correctCount <= r.maxScore,
      ) || QUIZ_RESULTS[0]
    );
  }, [correctCount]);

  const getResultImage = useCallback((): ImageSourcePropType => {
    if (correctCount <= 4) return GUIDE_IMAGES.quiz_failed;
    if (correctCount <= 8) return GUIDE_IMAGES.quiz_ok;
    return GUIDE_IMAGES.quiz_done;
  }, [correctCount]);

  const getOptionGradient = useCallback(
    (option: string): GradientVariant => {
      if (!isAnswered) return 'main_gradient';

      if (option === currentQuestion?.correctValue) {
        return 'green_gradient';
      }

      if (option === selectedAnswer) {
        return 'red_gradient';
      }

      return 'main_gradient';
    },
    [isAnswered, currentQuestion, selectedAnswer],
  );

  return {
    navigation,
    quizState,
    currentIndex,
    correctCount,
    wrongCount,
    timeLeft,
    showHint,
    selectedAnswer,
    isAnswered,
    shuffledQuestions,
    shuffledOptions,
    currentQuestion,
    handleStart,
    handleAnswer,
    handleHint,
    resetQuiz,
    handleBack,
    handleStartExploring,
    getResultData,
    getResultImage,
    getOptionGradient,
  };
};
