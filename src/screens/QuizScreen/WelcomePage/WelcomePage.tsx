import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomHeader,
  CustomScreenWrapper,
  CustomText,
} from 'src/components';
import { GUIDE_IMAGES, QUIZ_MAIN_PAGE } from 'src/constants';
import type { RootStackNavigationProp } from 'src/types';

interface WelcomePageProps {
  handleStart: () => void;
  navigation: RootStackNavigationProp;
}

const WelcomePage = ({ handleStart, navigation }: WelcomePageProps) => {
  return (
    <CustomScreenWrapper extraStyle={styles.welcomeWrapper}>
      <View style={styles.welcomeHeader}>
        <CustomHeader
          title={QUIZ_MAIN_PAGE.header_text}
          onBackPress={() => navigation.goBack()}
          quiz
        />
      </View>

      <View style={styles.contentWrapper}>
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
      </View>
    </CustomScreenWrapper>
  );
};

export default WelcomePage;
