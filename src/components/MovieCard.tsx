import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  SPACING,
  COLORS,
  BORDERRADIUS,
  FONTFAMILY,
  FONTSIZE,
} from '../theme/theme';
import CustomIcon from './CustomIcon';
import {scale} from 'react-native-size-matters';
const genres: any = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentry',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystry',
  10749: 'Romance',
  878: 'Science Fiction',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western',
};
const MovieCard = (props: any) => {
  return (
    <TouchableOpacity
      style={[styles.container]}
      onPress={() => props.cardFunction()}>
      <View style={{alignItems:'center'}}>
        <Image
          style={[styles.cardImage, {width: props.cardWidth}]}
          source={{uri: props.imagePath}}
        />

        <View>
          <View style={styles.rateContainer}>
            <CustomIcon name="star" style={styles.starIcon} />
            <Text style={styles.voteText}>
              {props.vote_average} ({props.vote_count})
            </Text>
          </View>

          <Text numberOfLines={1} style={styles.textTitle}>
            {props.title}
          </Text>

          <View style={styles.genreContainer}>
            {props.genre.map((item: any) => {
              return (
                <View key={item} style={styles.genreBox}>
                  <Text style={styles.genreText}>{genres[item]}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: COLORS.Black,
   
  },
  cardImage: {
    aspectRatio: 3 / 4,
    borderRadius: scale(BORDERRADIUS.radius_20),
  },
  textTitle: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: scale(FONTSIZE.size_24),
    color: COLORS.White,
    textAlign: 'center',
    paddingVertical: SPACING.space_10,
  },
  rateContainer: {
    flexDirection: 'row',
    gap: scale(SPACING.space_10),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: scale(SPACING.space_10),
  },
  starIcon: {
    fontSize: scale(FONTSIZE.size_20),
    color: COLORS.Yellow,
  },
  voteText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: scale(FONTSIZE.size_14),
    color: COLORS.White,
  },
  genreContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: scale(SPACING.space_20),
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: scale(SPACING.space_8),
  },
  genreBox: {
    borderColor: COLORS.WhiteRGBA50,
    borderWidth: 1,
    paddingVertical: scale(SPACING.space_4),
    paddingHorizontal: scale(SPACING.space_10),
    borderRadius: BORDERRADIUS.radius_25,
  },
  genreText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: scale(FONTSIZE.size_10),
    color: COLORS.WhiteRGBA75,
  },
});
