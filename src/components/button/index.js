import React from 'react';
import {TouchableOpacity} from 'react-native';
import {pallet} from '../../theme';

// @components
import Text from '../customText';

// @styles
import styles from './styles';

const Button = ({customStyle, children, onPress}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.container, customStyle && customStyle]}>
    <Text style={styles.buttonText} bold>
      {children}
    </Text>
  </TouchableOpacity>
);

export default Button;
