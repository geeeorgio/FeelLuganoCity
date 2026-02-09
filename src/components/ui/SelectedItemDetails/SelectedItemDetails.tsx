import { useState } from 'react';
import { Image, ImageBackground, View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import LikeIcon from '../CustomIcons/LikeIcon';
import MapIcon from '../CustomIcons/MapIcon';
import ShareIcon from '../CustomIcons/ShareIcon';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import { COLORS, NOTE_FRAME } from 'src/constants';
import type { PlaceType } from 'src/types';
import { handleShare } from 'src/utils';

interface SelectedItemDetailsProps {
  item: PlaceType;
}

const SelectedItemDetails = ({ item }: SelectedItemDetailsProps) => {
  const [shouldShowMap, setShouldShowMaps] = useState(false);
  const [isFactBtnPressed, setIsFactBtnPressed] = useState(false);

  const factBtnText = isFactBtnPressed
    ? 'Tap to close interesting fact'
    : 'Tap to get interesting fact';

  const handleSharePress = () => {
    handleShare();
  };

  const handleMapsPress = () => {
    setShouldShowMaps(true);
  };

  const handleLikePress = () => {};

  const toggleFactBtnPress = () => {
    setIsFactBtnPressed((prev) => !prev);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} resizeMode="cover" />
        </View>
        <View style={styles.contentContainer}>
          <CustomText extraStyle={styles.description}>
            {item.description}
          </CustomText>

          <View style={styles.cordsContainer}>
            <MapIcon color={COLORS.white} style={styles.icon} />
            <CustomText extraStyle={styles.adress}>{item.adress}</CustomText>
          </View>

          <View style={styles.actionBtnsContainer}>
            <CustomButton
              gradientVariant="liquid_gradient"
              onPress={handleMapsPress}
              extraBtnStyle={styles.openBtn}
              extraContainerStyle={styles.openBtnContainer}
            >
              <CustomText extraStyle={styles.actionBtnText}>
                Open at maps
              </CustomText>
            </CustomButton>
            <View style={styles.twoBtnsContainer}>
              <CustomButton
                gradientVariant="liquid_gradient"
                onPress={handleSharePress}
                extraBtnStyle={styles.smallBtn}
                extraContainerStyle={styles.smallBtnContainer}
              >
                <ShareIcon color={COLORS.white} style={styles.icon} />
              </CustomButton>
              <CustomButton
                gradientVariant="liquid_gradient"
                onPress={handleLikePress}
                extraBtnStyle={styles.smallBtn}
                extraContainerStyle={styles.smallBtnContainer}
              >
                <LikeIcon color={COLORS.white} style={styles.icon} />
              </CustomButton>
            </View>
          </View>
        </View>
      </View>

      <CustomButton
        gradientVariant="liquid_gradient"
        onPress={toggleFactBtnPress}
        extraBtnStyle={styles.factsBtn}
        extraContainerStyle={styles.factsBtnContainer}
      >
        <CustomText extraStyle={styles.factsBtnText}>{factBtnText}</CustomText>
      </CustomButton>

      {isFactBtnPressed && (
        <View style={styles.noteFrameContainer}>
          <ImageBackground
            source={NOTE_FRAME}
            resizeMode="cover"
            style={styles.noteFrame}
          >
            <View style={styles.factsTextContainer}>
              <CustomText extraStyle={styles.factsText}>{item.fact}</CustomText>
            </View>
          </ImageBackground>
        </View>
      )}

      {/* {shouldShowMap && <MapCard />} */}
    </View>
  );
};

export default SelectedItemDetails;
