import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

export default function RootNavigator() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(() => {
  //   // Simulate checking auth status (replace with actual auth logic)
  //   setTimeout(() => setIsAuthenticated(true), 50000);
  // }, []);

  return (
    <NavigationContainer>
       {isAuthenticated ?
         <MainNavigator /> :
         <AuthNavigator />
       }
    </NavigationContainer>
  );
}
