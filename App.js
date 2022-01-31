import React, {useEffect} from 'react';

// @screens
import HomeScreen from './src/screens/HomeScreen';

import SplashScreen from 'react-native-splash-screen';
import {Platform, StatusBar} from 'react-native';

const App = () => {
  useEffect(() => {
    Platform.OS !== 'ios' ? SplashScreen.hide() : null;
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#5B4181" />
      <HomeScreen />
    </>
  );
};

export default App;
