import { View, Text } from 'react-native'
import React from 'react'
import { CustomText } from '../../components'
import { globalStyles } from '../../styles/globalStyles'

export default function MoVieDetailsScreen() {
  return (
    <View style={[globalStyles.container]}>
      <CustomText>MoVieDetailsScreen</CustomText>
    </View>
  )
}