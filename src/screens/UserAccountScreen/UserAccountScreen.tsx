import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { CustomText } from '../../components';
import { globalStyles } from '../../styles/globalStyles';

export default function UserAccountScreen() {
  return (
    <View style={[globalStyles.container]}>
      <CustomText>UserAccountScreen</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({});
