import { FlatList, View } from 'react-native';

import SelectedListItem from '../SelectedListItem/SelectedListItem';

import { styles } from './styles';

import type { PlaceType } from 'src/types';

interface SelectedCategoryListProps {
  places: PlaceType[];
  onItemPress: (item: PlaceType) => void;
}

const SelectedCategoryList = ({
  places,
  onItemPress,
}: SelectedCategoryListProps) => {
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <SelectedListItem item={item} onItemPress={onItemPress} />
      )}
      showsVerticalScrollIndicator={false}
      style={styles.list}
      contentContainerStyle={styles.contentContainer}
      ListFooterComponent={<View style={styles.footer} />}
    />
  );
};

export default SelectedCategoryList;
