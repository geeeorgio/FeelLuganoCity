import type { ReactNode } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

import { MAIN_BACKGROUND } from 'src/constants';

interface GameBackgroundProps {
  children: ReactNode;
}

const GameBackground = ({ children }: GameBackgroundProps) => {
  return (
    <ImageBackground
      source={MAIN_BACKGROUND}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.content}>{children}</View>
    </ImageBackground>
  );
};

export default GameBackground;

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    flex: 1,
  },
});
