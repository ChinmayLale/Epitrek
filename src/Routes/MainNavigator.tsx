import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/SplashScreen';

const MainStack = createStackNavigator();

export default function MainNavigator() {
  return (
    <MainStack.Navigator initialRouteName="Splash" screenOptions={{headerShown:false}}>
      <MainStack.Screen name="Home" component={HomeScreen}/>
      <MainStack.Screen name="Splash" component={ProfileScreen} />
    </MainStack.Navigator>
  );
}
