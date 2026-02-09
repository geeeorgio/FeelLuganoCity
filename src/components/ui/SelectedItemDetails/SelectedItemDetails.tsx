import { View } from 'react-native';

import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import type { PlaceType } from 'src/types';

interface SelectedItemDetailsProps {
  item: PlaceType;
}

const SelectedItemDetails = ({ item }: SelectedItemDetailsProps) => {
  return (
    <View style={styles.container}>
      <CustomText>{item.title}</CustomText>
    </View>
  );
};

export default SelectedItemDetails;
