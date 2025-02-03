import React from 'react';
import {TamaguiProvider, createTamagui} from '@tamagui/core';
import {defaultConfig} from '@tamagui/config/v4';
import './global.css';
import {useColorScheme} from 'react-native';
// import SplashScreen from './src/Screens/SplashScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RootNavigator from './src/Routes/RootNavigator';
import {enableScreens} from 'react-native-screens';
enableScreens();

const config = createTamagui(defaultConfig);

type Conf = typeof config;

// make imports typed
declare module '@tamagui/core' {
   interface TamaguiCustomConfig extends Conf {}
}

function App() {
   const theme = useColorScheme() || 'dark';

   return (
      <TamaguiProvider config={config} defaultTheme="light">
         <GestureHandlerRootView>
            <RootNavigator />
         </GestureHandlerRootView>
      </TamaguiProvider>
   );
}

export default App;
