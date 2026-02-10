import { useNavigation } from '@react-navigation/native';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Image,
  ImageBackground,
  LayoutAnimation,
  Platform,
  UIManager,
  View,
} from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomScreenWrapper,
  CustomText,
} from 'src/components';
import BackIcon from 'src/components/ui/CustomIcons/BackIcon';
import type { GradientVariant } from 'src/constants';
import {
  COLORS,
  GUIDE_IMAGES,
  LUGANO_QUIZ,
  MAIN_BACKGROUND,
  NOTE_FRAME,
  QUIZ_MAIN_PAGE,
  QUIZ_RESULTS,
  TIMER_SECONDS,
  TOTAL_QUESTIONS,
} from 'src/constants';
import type { QuizState, RootStackNavigationProp } from 'src/types';
import { formatTime, shuffleArray } from 'src/utils';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const QuizScreen = () => {
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
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
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
    navigation.navigate('MainStack', { screen: 'HomeScreen' });
  };

  const getResultData = () => {
    return (
      QUIZ_RESULTS.find(
        (r) => correctCount >= r.minScore && correctCount <= r.maxScore,
      ) || QUIZ_RESULTS[0]
    );
  };

  const getResultImage = () => {
    if (correctCount <= 4) return GUIDE_IMAGES.quiz_failed;
    if (correctCount <= 8) return GUIDE_IMAGES.quiz_ok;
    return GUIDE_IMAGES.quiz_done;
  };

  const getOptionGradient = (option: string): GradientVariant => {
    if (!isAnswered || selectedAnswer !== option) return 'main_gradient';
    if (option === currentQuestion.correctValue) return 'green_gradient';
    return 'red_gradient';
  };

  if (quizState === 'welcome') {
    return (
      <ImageBackground
        source={MAIN_BACKGROUND}
        style={styles.background}
        resizeMode="cover"
      >
        <CustomScreenWrapper extraStyle={styles.welcomeWrapper}>
          <View style={styles.welcomeHeader}>
            <CustomButton
              onPress={() => navigation.goBack()}
              extraBtnStyle={styles.backButton}
            >
              <BackIcon color={COLORS.white} style={styles.backIcon} />
            </CustomButton>
            <CustomText extraStyle={styles.welcomeHeaderText}>
              {QUIZ_MAIN_PAGE.header_text}
            </CustomText>
          </View>

          <View style={styles.welcomeImageContainer}>
            <Image
              source={GUIDE_IMAGES.quiz_lady}
              style={styles.welcomeImage}
              resizeMode="contain"
            />
          </View>

          <CustomContainer
            variant="main_gradient"
            extraStyle={styles.welcomeCard}
          >
            <CustomText extraStyle={styles.welcomeTitle}>
              {QUIZ_MAIN_PAGE.title}
            </CustomText>
            <CustomText extraStyle={styles.welcomeDescription}>
              {QUIZ_MAIN_PAGE.description}
            </CustomText>
            <CustomButton
              onPress={handleStart}
              gradientVariant="liquid_gradient"
              extraBtnStyle={styles.goButton}
              extraContainerStyle={styles.goButtonContainer}
            >
              <CustomText extraStyle={styles.goButtonText}>
                {QUIZ_MAIN_PAGE.btn_text}
              </CustomText>
            </CustomButton>
          </CustomContainer>
        </CustomScreenWrapper>
      </ImageBackground>
    );
  }

  if (quizState === 'results') {
    const resultData = getResultData();
    const resultImage = getResultImage();

    return (
      <ImageBackground
        source={MAIN_BACKGROUND}
        style={styles.background}
        resizeMode="cover"
        blurRadius={10}
      >
        <CustomScreenWrapper extraStyle={styles.resultsWrapper}>
          <View style={styles.resultsBackRow}>
            <CustomButton
              onPress={() => navigation.goBack()}
              extraBtnStyle={styles.backButton}
            >
              <BackIcon color={COLORS.white} style={styles.backIcon} />
            </CustomButton>
          </View>

          <View style={styles.resultsImageContainer}>
            <Image
              source={resultImage}
              style={styles.resultsImage}
              resizeMode="contain"
            />
          </View>

          <CustomContainer
            variant="main_gradient"
            extraStyle={styles.resultsCard}
          >
            <CustomText extraStyle={styles.resultsScoreTitle}>
              {`You score :  ${correctCount}/${TOTAL_QUESTIONS}`}
            </CustomText>
            <CustomText extraStyle={styles.resultsDescription}>
              {resultData.description}
            </CustomText>
            <CustomText extraStyle={styles.resultsAdvice}>
              {resultData.advice}
            </CustomText>
            <View style={styles.resultsButtonsRow}>
              <CustomButton
                onPress={handleStartExploring}
                gradientVariant="main_gradient"
                extraBtnStyle={styles.resultsButton}
                extraContainerStyle={styles.resultsButtonContainer}
              >
                <CustomText extraStyle={styles.resultsButtonText}>
                  {resultData.left_btn_text}
                </CustomText>
              </CustomButton>
              <CustomButton
                onPress={handleStart}
                gradientVariant="main_gradient"
                extraBtnStyle={styles.resultsButton}
                extraContainerStyle={styles.resultsButtonContainer}
              >
                <CustomText extraStyle={styles.resultsButtonText}>
                  {resultData.right_btn_text}
                </CustomText>
              </CustomButton>
            </View>
          </CustomContainer>
        </CustomScreenWrapper>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground
      source={MAIN_BACKGROUND}
      style={styles.background}
      resizeMode="cover"
      blurRadius={10}
    >
      <CustomScreenWrapper extraStyle={styles.gameWrapper}>
        <View style={styles.gameHeader}>
          <View style={styles.headerLeft}>
            <CustomButton
              onPress={handleBack}
              extraBtnStyle={styles.backButton}
            >
              <BackIcon color={COLORS.white} style={styles.backIcon} />
            </CustomButton>
            <CustomText extraStyle={styles.questionCounter}>
              {`${currentIndex + 1}/${TOTAL_QUESTIONS}`}
            </CustomText>
          </View>
          <View style={styles.headerRight}>
            <CustomText extraStyle={styles.timerText}>
              {formatTime(timeLeft)}
            </CustomText>
            <View style={styles.scoreIndicator}>
              <View style={[styles.scoreDot, styles.greenDot]} />
              <CustomText extraStyle={styles.scoreValue}>
                {correctCount}
              </CustomText>
            </View>
            <View style={styles.scoreIndicator}>
              <View style={[styles.scoreDot, styles.redDot]} />
              <CustomText extraStyle={styles.scoreValue}>
                {wrongCount}
              </CustomText>
            </View>
          </View>
        </View>

        <View style={styles.questionFrameContainer}>
          <ImageBackground
            source={NOTE_FRAME}
            style={styles.questionFrame}
            resizeMode="contain"
          >
            <CustomText extraStyle={styles.questionText}>
              {currentQuestion.question}
            </CustomText>
          </ImageBackground>
        </View>

        {showHint ? (
          <View style={styles.hintContainer}>
            <CustomText extraStyle={styles.hintText}>
              {currentQuestion.hint}
            </CustomText>
          </View>
        ) : (
          <CustomButton
            onPress={handleHint}
            gradientVariant="main_gradient"
            extraBtnStyle={styles.hintButton}
            extraContainerStyle={styles.hintButtonContainer}
          >
            <CustomText extraStyle={styles.hintButtonText}>Hint</CustomText>
          </CustomButton>
        )}

        <View style={styles.answersContainer}>
          {shuffledOptions.map((option) => (
            <CustomButton
              key={option}
              onPress={() => handleAnswer(option)}
              gradientVariant={getOptionGradient(option)}
              disabled={isAnswered}
              extraBtnStyle={styles.answerButton}
              extraContainerStyle={styles.answerButtonContainer}
            >
              <CustomText extraStyle={styles.answerText}>{option}</CustomText>
            </CustomButton>
          ))}
        </View>
      </CustomScreenWrapper>
    </ImageBackground>
  );
};

export default QuizScreen;
