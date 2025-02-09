import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {LoginScreen} from '../Screens/Auth/LoginScreen.js';

const AuthStack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
      <AuthStack.Screen name="Login" component={LoginScreen} />
      {/*<AuthStack.Screen name="Register" component={RegisterScreen} />*/}
    </AuthStack.Navigator>
  );
}
