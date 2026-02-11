import { useNavigation } from '@react-navigation/native';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { ImageSourcePropType } from 'react-native';

import type { GradientVariant } from 'src/constants';
import {
  GUIDE_IMAGES,
  LUGANO_QUIZ,
  QUIZ_RESULTS,
  TIMER_SECONDS,
  TOTAL_QUESTIONS,
} from 'src/constants';
import type { QuizState, RootStackNavigationProp } from 'src/types';
import { shuffleArray } from 'src/utils';

export const useQuizLogic = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  const [quizState, setQuizState] = useState<QuizState>('welcome');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
  const [showHint, setShowHint] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState(LUGANO_QUIZ);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const transitionRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
      setTimeLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [quizState, currentIndex, isAnswered]);

  useEffect(() => {
    if (timeLeft <= 0 && quizState === 'playing' && !isAnswered) {
      setIsAnswered(true);
      setWrongCount((prev) => prev + 1);
    }
  }, [timeLeft, quizState, isAnswered]);

  useEffect(() => {
    if (!isAnswered || quizState !== 'playing') return;

    transitionRef.current = setTimeout(() => {
      if (currentIndex + 1 >= TOTAL_QUESTIONS) {
        setQuizState('results');
      } else {
        setCurrentIndex((prev) => prev + 1);
        setTimeLeft(TIMER_SECONDS);
        setShowHint(false);
        setSelectedAnswer(null);
        setIsAnswered(false);
      }
    }, 1500);

    return () => {
      if (transitionRef.current) clearTimeout(transitionRef.current);
    };
  }, [isAnswered, currentIndex, quizState]);

  const handleStart = () => {
    setShuffledQuestions(shuffleArray(LUGANO_QUIZ));
    setQuizState('playing');
    setCurrentIndex(0);
    setCorrectCount(0);
    setWrongCount(0);
    setTimeLeft(TIMER_SECONDS);
    setShowHint(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const handleAnswer = (option: string) => {
    if (isAnswered) return;

    setSelectedAnswer(option);
    setIsAnswered(true);

    if (option === currentQuestion.correctValue) {
      setCorrectCount((prev) => prev + 1);
    } else {
      setWrongCount((prev) => prev + 1);
    }
  };

  const handleHint = () => {
    setShowHint(true);
  };

  const resetQuiz = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (transitionRef.current) clearTimeout(transitionRef.current);
    setQuizState('welcome');
    setCurrentIndex(0);
    setCorrectCount(0);
    setWrongCount(0);
    setTimeLeft(TIMER_SECONDS);
    setShowHint(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const handleBack = () => {
    if (quizState === 'playing') {
      resetQuiz();
    } else {
      navigation.goBack();
    }
  };

  const handleStartExploring = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'MainStack' }],
    });
  };

  const getResultData = () => {
    return (
      QUIZ_RESULTS.find(
        (r) => correctCount >= r.minScore && correctCount <= r.maxScore,
      ) || QUIZ_RESULTS[0]
    );
  };

  const getResultImage: () => ImageSourcePropType = () => {
    if (correctCount <= 4) return GUIDE_IMAGES.quiz_failed;
    if (correctCount <= 8) return GUIDE_IMAGES.quiz_ok;
    return GUIDE_IMAGES.quiz_done;
  };

  const getOptionGradient = (option: string): GradientVariant => {
    if (!isAnswered) return 'main_gradient';

    if (option === currentQuestion.correctValue) {
      return 'green_gradient';
    }

    if (option === selectedAnswer) {
      return 'red_gradient';
    }

    return 'main_gradient';
  };

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
