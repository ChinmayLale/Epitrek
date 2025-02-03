import React from 'react';
import './global.css';
import {
  useColorScheme,
} from 'react-native';
// import SplashScreen from './src/Screens/SplashScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootNavigator from './src/Routes/RootNavigator';
import { enableScreens } from 'react-native-screens';
enableScreens();

function App() {
  const theme = useColorScheme() || 'dark';

  return (
      <GestureHandlerRootView>
        <RootNavigator />
      </GestureHandlerRootView>
  );
}

export default App;
