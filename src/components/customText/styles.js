import {StyleSheet} from 'react-native';

// @theme
import {fonts, pallet} from '../../theme';

const styles = StyleSheet.create({
  general: {
    color: pallet.white,
  },
  regular: {
    fontFamily: fonts.regular,
  },
  bold: {
    fontFamily: fonts.bold,
  },
});

export default styles;
