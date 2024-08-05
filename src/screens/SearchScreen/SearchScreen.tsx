import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { CustomText } from '../../components';
import { globalStyles } from '../../styles/globalStyles';

export default function SearchScreen() {
  return (
    <View style={[globalStyles.container]}>
      <CustomText>SearchScreen</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({});
