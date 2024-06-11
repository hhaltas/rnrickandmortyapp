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
import ListItem from '../../components/ListItem';
import {Colors} from '../../utils/color';

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

  const ListFC = () => {
    return loading && page > 1 ? (
      <ActivityIndicator size="large" color={Colors.separator} />
    ) : null;
  };

  const goToEpisode = item => {
    navigation.navigate('Episode', {episodeId: item});
  };

  return (
    <SafeAreaView style={styles.container}>
      <ListItem
        data={episodes}
        renderType={'episode'}
        onEndReached={loadMoreEpisodes}
        onEndReachedThreshold={0.5}
        ListFooterComponent={ListFC}
        goTo={goToEpisode}
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
