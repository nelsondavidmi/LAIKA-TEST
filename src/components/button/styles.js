import {StyleSheet} from 'react-native';

// @theme
import {pallet} from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: pallet.yellowGold,
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: pallet.black,
  },
});

export default styles;
