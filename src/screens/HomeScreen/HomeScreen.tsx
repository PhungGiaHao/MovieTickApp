import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {globalStyles} from '../../styles/globalStyles';
import {CustomText} from '../../components';

export default function HomeScreen() {
  return (
    <View style={[globalStyles.container]}>
      <CustomText>HomeScreen</CustomText>
    </View>
  );
}
