import { Image, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import CustomScreenWrapper from 'src/components/ui/CustomScreenWrapper/CustomScreenWrapper';
import { GUIDE_IMAGES, ONBOARD_TEXT } from 'src/constants';
import { useOnboardingContext } from 'src/hooks/useOnboardingContext';

const OnboardingScreen_4 = () => {
  const { setIsContextOnboardingDone } = useOnboardingContext();

  const handleNext = () => {
    setIsContextOnboardingDone(true);
  };

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={GUIDE_IMAGES.onbd_4}
          style={styles.img}
          resizeMode="contain"
        />
      </View>
      <CustomContainer
        variant="main_gradient"
        extraStyle={styles.textContainer}
      >
        <CustomText extraStyle={styles.title}>
          {ONBOARD_TEXT.onboarding4.title}
        </CustomText>
        <CustomText extraStyle={styles.description}>
          {ONBOARD_TEXT.onboarding4.description}
        </CustomText>

        <CustomButton
          onPress={handleNext}
          gradientVariant="liquid_gradient"
          extraBtnStyle={styles.btn}
          extraContainerStyle={styles.btnContainer}
        >
          <CustomText extraStyle={styles.btnText}>
            {ONBOARD_TEXT.onboarding4.btn_text}
          </CustomText>
        </CustomButton>
      </CustomContainer>
    </CustomScreenWrapper>
  );
};

export default OnboardingScreen_4;
