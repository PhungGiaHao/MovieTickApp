// CustomText.tsx
import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import {scale} from 'react-native-size-matters';

interface CustomTextProps extends TextProps {
  size?: number;
  color?: string;
  children: React.ReactNode;
  style?: object;
}

const CustomText = (props: CustomTextProps) => {
  const {children, style, numberOfLines, ...restProps} = props;
  return (
    <Text
      style={[styles.text, style]}
      {...(numberOfLines != null && {numberOfLines})}
      {...restProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: COLORS.White,
    fontSize: scale(FONTSIZE.size_12),
    fontFamily: FONTFAMILY.poppins_regular,
    paddingVertical: scale(SPACING.space_8), 
  },
});

export default CustomText;
