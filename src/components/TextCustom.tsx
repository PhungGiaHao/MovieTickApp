// CustomText.tsx
import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {COLORS, FONTFAMILY, FONTSIZE} from '../theme/theme';
import {scale} from 'react-native-size-matters';

interface CustomTextProps extends TextProps {
  children: React.ReactNode;
  style?: object;
  numberOfLines?: number;
}

const CustomText = (props: CustomTextProps) => {
  const {children, style, numberOfLines} = props;
  return (
    <Text
      style={[styles.text, style]}
      {...(numberOfLines != null && {numberOfLines})}
      {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: COLORS.White,
    fontSize: scale(FONTSIZE.size_12),
    fontFamily: FONTFAMILY.poppins_regular,
  },
});

export default CustomText;
