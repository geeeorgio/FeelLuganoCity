import { useNavigation } from '@react-navigation/native';
import { Image, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import CustomScreenWrapper from 'src/components/ui/CustomScreenWrapper/CustomScreenWrapper';
import { GUIDE_IMAGES, ONBOARD_TEXT } from 'src/constants';
import type { OnboardingStackNavigationProp } from 'src/types';

const OnboardingScreen_2 = () => {
  const navigation = useNavigation<OnboardingStackNavigationProp>();

  const handleNext = () => {
    navigation.navigate('OnboardingScreen_3');
  };

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={GUIDE_IMAGES.onbd_2}
          style={styles.img}
          resizeMode="contain"
        />
      </View>
      <CustomContainer
        variant="main_gradient"
        extraStyle={styles.textContainer}
      >
        <CustomText extraStyle={styles.title}>
          {ONBOARD_TEXT.onboarding2.title}
        </CustomText>
        <CustomText extraStyle={styles.description}>
          {ONBOARD_TEXT.onboarding2.description}
        </CustomText>

        <CustomButton
          onPress={handleNext}
          gradientVariant="liquid_gradient"
          extraBtnStyle={styles.btn}
          extraContainerStyle={styles.btnContainer}
        >
          <CustomText extraStyle={styles.btnText}>
            {ONBOARD_TEXT.onboarding2.btn_text}
          </CustomText>
        </CustomButton>
      </CustomContainer>
    </CustomScreenWrapper>
  );
};

export default OnboardingScreen_2;
