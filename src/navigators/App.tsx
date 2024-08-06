import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './MainNavigator';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <StatusBar hidden translucent />
      <MainStackNavigator />
    </NavigationContainer>
  );
}
