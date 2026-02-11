import React from 'react';
import type { ImageSourcePropType } from 'react-native';
import { Image, View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomHeader,
  CustomScreenWrapper,
  CustomText,
} from 'src/components';
import type { QUIZ_RESULTS } from 'src/constants';
import { TOTAL_QUESTIONS } from 'src/constants';
import type { RootStackNavigationProp } from 'src/types';

interface QuizResultsProps {
  navigation: RootStackNavigationProp;
  resultImage: ImageSourcePropType;
  resultData: (typeof QUIZ_RESULTS)[number];
  correctCount: number;
  handleStartExploring: () => void;
  handleStart: () => void;
}

const QuizResults = ({
  navigation,
  resultImage,
  resultData,
  correctCount,
  handleStartExploring,
  handleStart,
}: QuizResultsProps) => {
  return (
    <CustomScreenWrapper extraStyle={styles.resultsWrapper}>
      <View style={styles.resultsHeader}>
        <CustomHeader onBackPress={() => navigation.goBack()} />
      </View>

      <View style={styles.resultsImageContainer}>
        <Image
          source={resultImage}
          style={styles.resultsImage}
          resizeMode="contain"
        />
      </View>

      <CustomContainer variant="main_gradient" extraStyle={styles.resultsCard}>
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
            gradientVariant="liquid_gradient"
            extraBtnStyle={styles.resultsButton}
            extraContainerStyle={styles.resultsButtonContainer}
          >
            <CustomText extraStyle={styles.resultsButtonText}>
              {resultData.left_btn_text}
            </CustomText>
          </CustomButton>
          <CustomButton
            onPress={handleStart}
            gradientVariant="liquid_gradient"
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
  );
};

export default QuizResults;
