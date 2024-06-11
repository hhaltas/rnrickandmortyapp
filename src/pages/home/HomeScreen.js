import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CardItem from '../../components/CardItem';
import {useNavigation} from '@react-navigation/native';
import {fetchEpisodes} from '../../store/episodes/episodeActions';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {loading, episodes, page, hasNextPage, error} = useSelector(
    state => state.episodes,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEpisodes(page));
  }, [dispatch]);

  const loadMoreEpisodes = () => {
    if (hasNextPage && !loading) {
      dispatch(fetchEpisodes(page));
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={episodes}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Episode', {episodeId: item.id})
              }>
              <CardItem
                date={item.air_date}
                episodeName={item.name}
                episode={item.episode}
              />
            </TouchableOpacity>
          );
        }}
        onEndReached={loadMoreEpisodes}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading && page > 1 ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : null
        }
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
