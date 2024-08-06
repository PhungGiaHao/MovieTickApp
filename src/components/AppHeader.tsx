import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import CustomIcon from './CustomIcon';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import {scale} from 'react-native-size-matters';
const AppHeader = (props: any) => {

  return (
    <View style={styles.container}>
      {props.ticketData  && (
        <TouchableOpacity style={styles.iconBG} onPress={() => props.action()}>
          <CustomIcon name={props.name} style={styles.iconStyle} />
        </TouchableOpacity>
      )}

      <Text style={styles.headerText}>{props.header}</Text>
      <View style={styles.emptyContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    color: COLORS.White,
    fontSize: scale(FONTSIZE.size_20),
  },
  headerText: {
    flex: 1,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: scale(FONTSIZE.size_20),
    textAlign: 'center',
    color: COLORS.White,
  },
  emptyContainer: {
    height: scale(SPACING.space_20 * 2),
    width: scale(SPACING.space_20 * 2),
  },
  iconBG: {
    height: scale(SPACING.space_20 * 2),
    width: scale(SPACING.space_20 * 2),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.Orange,
  },
});

export default AppHeader;
