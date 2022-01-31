import {Platform} from 'react-native';

export const pallet = {
  laikaColor: '#653f90',
  primaryColor: '#a47dd0',
  secondaryColor: '#9b50b5',
  green: '#4fe8ba',
  yellowGold: '#ffc200',
  blueSky: '#6670e8',
  orange: '#ff6b00',
  white: '#fff',
  purpleVariant: '#8a5dbc',
  black: 'black',
  plum: '#bf93f1',
};

export const fonts = {
  bold: Platform.OS === 'ios' ? 'Open Sans Bold' : 'OpenSans-Bold',
  regular: Platform.OS === 'ios' ? 'Open Sans Regular' : 'OpenSans-Regular',
};
