import CustomIcon from './CustomIcon';

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {scale, ScaledSheet} from 'react-native-size-matters';
import {
  SPACING,
  COLORS,
  BORDERRADIUS,
  FONTFAMILY,
  FONTSIZE,
} from '../theme/theme';

const InputHeader = (props: any) => {
  const [searchText, setSearchText] = useState<string>('');
  return (
    <View style={styles.inputBox}>
      <TextInput
        style={styles.textInput}
        onChangeText={textInput => setSearchText(textInput)}
        value={searchText}
        placeholder="Search your Movies..."
        placeholderTextColor={COLORS.WhiteRGBA32}
      />
      <TouchableOpacity
        style={styles.searchIcon}
        onPress={() => props.searchFunction(searchText)}>
        <CustomIcon
          name="search"
          color={COLORS.Orange}
          size={FONTSIZE.size_24}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = ScaledSheet.create({
  inputBox: {
    display: 'flex',
    paddingVertical: scale(SPACING.space_4),
    paddingHorizontal: scale(SPACING.space_12),
    borderWidth: 2,
    borderColor: COLORS.WhiteRGBA15,
    borderRadius: scale(BORDERRADIUS.radius_25),
    flexDirection: 'row',
    marginTop: scale(SPACING.space_24),
    alignItems:'center',
  },
  textInput: {
    width: '90%',
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: scale(FONTSIZE.size_14),
    color: COLORS.White,
  },
  searchIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: scale(SPACING.space_10),
  },
});
export default InputHeader;
