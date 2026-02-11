import { useState } from 'react';
import { Image, ImageBackground, View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import LikeIcon from '../CustomIcons/LikeIcon';
import MapIcon from '../CustomIcons/MapIcon';
import ShareIcon from '../CustomIcons/ShareIcon';
import CustomText from '../CustomText/CustomText';
import MapComponent from '../MapComponent/MapComponent';

import { styles } from './styles';

import { COLORS, NOTE_FRAME } from 'src/constants';
import { useFavoritesContext } from 'src/hooks/useFavoritesContext';
import type { PlaceType } from 'src/types';
import { handleShare } from 'src/utils';

interface SelectedItemDetailsProps {
  item: PlaceType;
  disableMapButton?: boolean;
}

const SelectedItemDetails = ({
  item,
  disableMapButton = false,
}: SelectedItemDetailsProps) => {
  const { toggleFavorite } = useFavoritesContext();
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
              disabled={disableMapButton}
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
                onPress={() => toggleFavorite(item.id)}
                extraBtnStyle={styles.smallBtn}
                extraContainerStyle={[
                  styles.smallBtnContainer,
                  item.isFavorite && styles.likeBtnActive,
                ]}
              >
                <LikeIcon color={COLORS.white} style={styles.icon} />
              </CustomButton>
            </View>
          </View>
        </View>
      </View>

      {!shouldShowMap && (
        <>
          <CustomButton
            gradientVariant="liquid_gradient"
            onPress={toggleFactBtnPress}
            extraBtnStyle={styles.factsBtn}
            extraContainerStyle={styles.factsBtnContainer}
          >
            <CustomText extraStyle={styles.factsBtnText}>
              {factBtnText}
            </CustomText>
          </CustomButton>

          {isFactBtnPressed && (
            <View style={styles.noteFrameContainer}>
              <ImageBackground
                source={NOTE_FRAME}
                resizeMode="cover"
                style={styles.noteFrame}
              >
                <View style={styles.factsTextContainer}>
                  <CustomText extraStyle={styles.factsText}>
                    {item.fact}
                  </CustomText>
                </View>
              </ImageBackground>
            </View>
          )}
        </>
      )}

      {shouldShowMap && (
        <View style={styles.mapContainer}>
          <MapComponent coordinates={item.coordinates} />
        </View>
      )}
    </View>
  );
};

export default SelectedItemDetails;
