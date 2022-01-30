import {Platform} from 'react-native';

export const pallet = {
  laikaColor: '#653F90',
  primaryColor: '#653F90',
  secondaryColor: '#9b50b5',
  green: '#4fe8ba',
  yellowGold: '#ffd602',
  blueSky: '#6670e8',
  orange: '#ff6b00',
};

export const fonts = {
  bold: Platform.OS === 'ios' ? 'Open Sans Bold' : 'OpenSans-Bold',
  regular: Platform.OS === 'ios' ? 'Open Sans Regular' : 'OpenSans-Regular',
};
