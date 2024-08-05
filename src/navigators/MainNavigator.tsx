import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import MoVieDetailsScreen from '../screens/MovieDetailsScreen/MoVieDetailsScreen';
import SeetBookingScreen from '../screens/SeatBookingScreen/SeetBookingScreen';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tab"
        component={TabNavigator}
        options={{headerShown: false, animation: 'default'}}
      />
      <Stack.Screen
        name="MovieDetails"
        component={MoVieDetailsScreen}
        options={{animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name="SeatBooking"
        component={SeetBookingScreen}
        options={{animation: 'slide_from_bottom'}}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
