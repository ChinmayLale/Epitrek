import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/SplashScreen';
import {LoginScreen} from "@/src/Screens/Auth/LoginScreen";

const MainStack = createStackNavigator();

export default function MainNavigator() {
  return (
    <MainStack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
      <MainStack.Screen name="Home" component={HomeScreen}/>
      {/*<MainStack.Screen name="Login" component={LoginScreen} />*/}
    </MainStack.Navigator>
  );
}
