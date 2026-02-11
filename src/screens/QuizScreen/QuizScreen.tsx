import { ImageBackground, ScrollView, View } from 'react-native';

import QuizResults from './QuizResults/QuizResults';
import { styles } from './styles';
import WelcomePage from './WelcomePage/WelcomePage';

import {
  CustomButton,
  CustomContainer,
  CustomScreenWrapper,
  CustomText,
} from 'src/components';
import BackIcon from 'src/components/ui/CustomIcons/BackIcon';
import { COLORS, NOTE_FRAME, TOTAL_QUESTIONS } from 'src/constants';
import { useQuizLogic } from 'src/hooks/useQuizLogic';
import { formatTime } from 'src/utils';

const QuizScreen = () => {
  const {
    navigation,
    quizState,
    currentIndex,
    correctCount,
    wrongCount,
    timeLeft,
    showHint,
    currentQuestion,
    isAnswered,
    shuffledOptions,
    handleStart,
    handleAnswer,
    handleHint,
    handleBack,
    handleStartExploring,
    getResultData,
    getResultImage,
    getOptionGradient,
  } = useQuizLogic();

  if (quizState === 'welcome') {
    return <WelcomePage handleStart={handleStart} navigation={navigation} />;
  }

  if (quizState === 'results') {
    const resultData = getResultData();
    const resultImage = getResultImage();

    return (
      <QuizResults
        navigation={navigation}
        resultImage={resultImage}
        resultData={resultData}
        correctCount={correctCount}
        handleStartExploring={handleStartExploring}
        handleStart={handleStart}
      />
    );
  }

  return (
    <CustomScreenWrapper extraStyle={styles.gameWrapper}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        bounces={false}
      >
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

          <View style={styles.hintSlot}>
            {showHint ? (
              <CustomContainer
                variant="liquid_gradient"
                extraStyle={styles.hintContainer}
              >
                <CustomText extraStyle={styles.hintText}>
                  {currentQuestion.hint}
                </CustomText>
              </CustomContainer>
            ) : (
              <CustomButton
                onPress={handleHint}
                gradientVariant="liquid_gradient"
                extraBtnStyle={styles.hintButton}
                extraContainerStyle={styles.hintButtonContainer}
              >
                <CustomText extraStyle={styles.hintButtonText}>Hint</CustomText>
              </CustomButton>
            )}
          </View>
        </View>

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
      </ScrollView>
    </CustomScreenWrapper>
  );
};

export default QuizScreen;
