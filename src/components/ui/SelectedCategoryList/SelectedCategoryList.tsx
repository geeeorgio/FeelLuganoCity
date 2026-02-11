import { useCallback } from 'react';
import { FlatList, View } from 'react-native';

import SelectedListItem from '../SelectedListItem/SelectedListItem';

import { styles } from './styles';

import type { PlaceType } from 'src/types';

interface SelectedCategoryListProps {
  places: PlaceType[];
  onItemPress: (item: PlaceType) => void;
}

const keyExtractor = (item: PlaceType) => item.id;

const SelectedCategoryList = ({
  places,
  onItemPress,
}: SelectedCategoryListProps) => {
  const renderItem = useCallback(
    ({ item }: { item: PlaceType }) => (
      <SelectedListItem item={item} onItemPress={onItemPress} />
    ),
    [onItemPress],
  );

  return (
    <FlatList
      data={places}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      style={styles.list}
      contentContainerStyle={styles.contentContainer}
      ListFooterComponent={<View style={styles.footer} />}
    />
  );
};

export default SelectedCategoryList;
