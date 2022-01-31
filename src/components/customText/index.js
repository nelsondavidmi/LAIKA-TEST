import React from 'react';
import {Text} from 'react-native';

// @styles
import stylesCustom from './styles';

const CustomText = ({bold, children, style}) => (
  <Text
    style={[
      stylesCustom.general,
      style,
      bold ? stylesCustom.bold : stylesCustom.regular,
    ]}>
    {children}
  </Text>
);

export default CustomText;
