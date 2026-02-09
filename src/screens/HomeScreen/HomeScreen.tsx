import { useState } from 'react';
import { Pressable } from 'react-native';

import { styles } from './styles';

import {
  CustomContainer,
  CustomScreenWrapper,
  CustomText,
} from 'src/components';
import { ABOUT } from 'src/constants';

const HomeScreen = () => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const toggleDescription = () => setIsDescriptionExpanded((prev) => !prev);

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <CustomContainer
        variant="main_gradient"
        extraStyle={styles.textContainer}
      >
        <Pressable
          onPress={toggleDescription}
          style={styles.descriptionContainer}
        >
          <CustomText extraStyle={styles.title}>{ABOUT.title}</CustomText>
          <CustomText
            ellipsizeMode="clip"
            numberOfLines={isDescriptionExpanded ? undefined : 8}
            extraStyle={styles.description}
          >
            {ABOUT.description}
          </CustomText>

          {!isDescriptionExpanded && (
            <CustomText extraStyle={styles.readMoreText}>
              {ABOUT.read_more_text}
            </CustomText>
          )}
        </Pressable>
      </CustomContainer>
    </CustomScreenWrapper>
  );
};

export default HomeScreen;
