import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchEpisodes} from '../store/episodes/episodeActions';

const routerIndex = () => {
  const dispatch = useDispatch();
  const {loading, episodes, error} = useSelector(state => state.episodes);

  useEffect(() => {
    dispatch(fetchEpisodes());
  }, [dispatch]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <SafeAreaView>
      <FlatList
        data={episodes}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.air_date}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default routerIndex;

const styles = StyleSheet.create({});
