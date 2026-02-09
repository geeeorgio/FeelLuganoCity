import { View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import BackIcon from '../CustomIcons/BackIcon';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import { COLORS } from 'src/constants';

interface CustomHeaderProps {
  title: string;
  onBackPress: () => void;
}

const CustomHeader = ({ title, onBackPress }: CustomHeaderProps) => {
  return (
    <View style={styles.container}>
      <CustomButton onPress={onBackPress} extraBtnStyle={styles.backButton}>
        <BackIcon color={COLORS.white} style={styles.backIcon} />
      </CustomButton>
      <CustomText extraStyle={styles.title}>{title}</CustomText>
    </View>
  );
};

export default CustomHeader;
