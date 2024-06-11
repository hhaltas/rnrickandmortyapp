import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

const FavoriesScreen = ({navigation}) => {
  const {favorites} = useSelector(state => state.favorite);

  const renderEpisode = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('EpisodeDetail', {episodeId: item.id})
      }>
      <View style={styles.episodeContainer}>
        <Text style={styles.episodeName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <Text style={styles.noFavorites}>No favorite episodes yet.</Text>
      ) : (
        <FlatList
          data={favorites}
          renderItem={renderEpisode}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  episodeContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  episodeName: {
    fontSize: 18,
  },
  noFavorites: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
  },
});

export default FavoriesScreen;
