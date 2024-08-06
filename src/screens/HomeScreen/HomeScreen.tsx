import {
  Animated,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {globalStyles} from '../../styles/globalStyles';
import {CustomText} from '../../components';
import InputHeader from '../../components/InputHeader';
import {scale, ScaledSheet} from 'react-native-size-matters';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../../theme/theme';
import {useAppDispatch} from '../../hook/hookRedux';
import {fetchPlayingMoviesStart} from '../../redux/slice/MoviePlaying/MoviePlayingSlice';
import {UseMoviePlaying} from '../../redux/slice/MoviePlaying';
import {UseMovieUpComing} from '../../redux/slice/MovieUpcoming';
import {UseMoviePopular} from '../../redux/slice/MoviePopular';
import MovieCard from '../../components/MovieCard';
import {baseImagePath} from '../../utils/baseImagePath';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import Carousel from 'react-native-reanimated-carousel';
import SubMovieCard from '../../components/SubMovieCard';
import { useKeyboardVisible } from '../../hook/useKeyboard';

export default function HomeScreen() {
  const {width, height} = useWindowDimensions();
  const item_size = width * 0.7 + SPACING.space_10;
  const CURRENT_ITEM_TRANSLATE_Y = 48;
  const EMPTY_ITEM_LENGTH = (width - item_size) / 2;
  const isKeyboardVisible = useKeyboardVisible();
  const dispatch = useAppDispatch();
  const {
    results: nowPlayingResults,
    loading: loadingPlaying,
    error: errorPlaying,
  } = UseMoviePlaying();
  const {
    results: upcomingResults,
    loading: loadingUpcoming,
    error: errorUpcoming,
  } = UseMovieUpComing();
  const {
    results: popularResults,
    loading: loadingPopular,
    error: errorPopular,
  } = UseMoviePopular();

  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  useEffect(() => {
    dispatch(fetchPlayingMoviesStart());

    if(isKeyboardVisible){
      navigation.navigate('Search')
    };
  }, [dispatch,isKeyboardVisible]);
  // const scrollX = useSharedValue(0);

  const renderItem = ({item, index}: {item: any; index: number}) => {
    return (
      <MovieCard
        shoudlMarginatedAtEnd={true}
        cardFunction={() => {
          navigation.push('MovieDetails', {movieid: item.id});
        }}
        cardWidth={width * 0.8}
        scrollEventThrottle={16}
        isFirst={index == 0 ? true : false}
        isLast={index == UseMovieUpComing?.length - 1 ? true : false}
        title={item.original_title}
        imagePath={baseImagePath('w780', item.poster_path)}
        genre={item.genre_ids.slice(1, 4)}
        vote_average={item.vote_average}
        vote_count={item.vote_count}
      />
    );
  };

  return (
    <SafeAreaView style={[globalStyles.container]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag">
        <InputHeader />
        <CustomText
          style={{
            fontSize: scale(FONTSIZE.size_20),
            fontFamily: FONTFAMILY.poppins_semibold,

            paddingHorizontal: scale(SPACING.space_8),
          }}>
          Now Playing
        </CustomText>
        <Carousel
          loop
          width={width - 40}
          height={height * 0.7}
          autoPlay={true}
          snapEnabled={true}
          mode="parallax"
          data={nowPlayingResults}
          scrollAnimationDuration={1000}
          onSnapToItem={index => console.log('current index:', index)}
          renderItem={renderItem}
        />

        <CustomText
          style={{
            fontSize: scale(FONTSIZE.size_20),
            fontFamily: FONTFAMILY.poppins_semibold,
            paddingVertical: scale(SPACING.space_28),
            paddingHorizontal: scale(SPACING.space_8),
          }}>
          Popular
        </CustomText>
        <FlatList
          data={popularResults}
          keyExtractor={(item: any) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={styles.containerGap36}
          renderItem={({item, index}) => (
            <SubMovieCard
              shoudlMarginatedAtEnd={true}
              cardFunction={() => {
                navigation.push('MovieDetails', {movieid: item.id});
              }}
              cardWidth={width / 3}
              isFirst={index == 0 ? true : false}
              isLast={index == popularResults?.length - 1 ? true : false}
              title={item.original_title}
              imagePath={baseImagePath('w342', item.poster_path)}
            />
          )}
        />
        <CustomText
          style={{
            fontSize: scale(FONTSIZE.size_20),
            fontFamily: FONTFAMILY.poppins_semibold,
            paddingVertical: scale(SPACING.space_28),
            paddingHorizontal: scale(SPACING.space_8),
          }}>
          Upcoming
        </CustomText>
        <FlatList
          data={upcomingResults}
          keyExtractor={(item: any) => item.id}
          horizontal
          bounces={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.containerGap36}
          renderItem={({item, index}) => (
            <SubMovieCard
              shoudlMarginatedAtEnd={true}
              cardFunction={() => {
                navigation.push('MovieDetails', {movieid: item.id});
              }}
              cardWidth={width / 3}
              isFirst={index == 0 ? true : false}
              isLast={index == upcomingResults?.length - 1 ? true : false}
              title={item.original_title}
              imagePath={baseImagePath('w342', item.poster_path)}
            />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: COLORS.Black,
  },
  scrollViewContainer: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  InputHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_28,
  },
  containerGap36: {
    gap: SPACING.space_36,
  },
});
