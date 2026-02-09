import { ScrollView, View } from 'react-native';

import CategoryItem from '../CategoryItem/CategoryItem';

import { styles } from './styles';

import { CustomText } from 'src/components';
import { PLACES_CATEGORIES } from 'src/constants';
import type { CategoryInfoType } from 'src/types';

interface CategoriesInfoProps {
  onCategorySelect: (category: CategoryInfoType) => void;
}

const CategoriesInfo = ({ onCategorySelect }: CategoriesInfoProps) => {
  return (
    <View style={styles.contentContainer}>
      <CustomText extraStyle={styles.title}>Choose the category</CustomText>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.categoryListContainer}
        contentContainerStyle={styles.categoryContentContainer}
      >
        {Object.values(PLACES_CATEGORIES).map((category) => (
          <CategoryItem
            key={category.name}
            category={category}
            onCategorySelect={onCategorySelect}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoriesInfo;
