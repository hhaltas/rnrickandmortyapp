import {
  Text,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  View,
  Image,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fetchEpisodeDetail} from '../../store/episodeDetail/episodeDetailActions';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCharacters} from '../../store/characters/characterActions';
import axios from 'axios';
import {
  addFavorite,
  removeFavorite,
} from '../../store/favorite/favoriteActions';

const EpisodeScreen = ({route}) => {
  const dispatch = useDispatch();

  const {loading, episodesDetails, error} = useSelector(
    state => state.episodesDetails,
  );
  const {favorites} = useSelector(state => state.favorite);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    dispatch(fetchEpisodeDetail(route.params.episodeId));
  }, [dispatch]);

  const isFavorite = episode => {
    return favorites.some(fav => fav.id === episode.id);
  };

  const toggleFavorite = episode => {
    if (isFavorite(episode)) {
      dispatch(removeFavorite(episode));
    } else {
      dispatch(addFavorite(episode));
    }
  };

  useEffect(() => {
    const fetchCharacters = async () => {
      if (episodesDetails) {
        const characterData = await Promise.all(
          episodesDetails.characters.map(async url => {
            console.log('url', url);
            const response = await axios.get(url);
            console.log('test', response.data.image);
            return response.data;
          }),
        );
        setCharacters(characterData);
      }
    };
    fetchCharacters();
  }, [episodesDetails]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  if (!episodesDetails) {
    return null;
  }
  const renderCharacter = ({item}) => (
    <View style={styles.characterContainer}>
      <Image source={{uri: item.image}} style={styles.characterImage} />
      <Text style={styles.characterName}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{episodesDetails.name}</Text>
      <Text style={styles.text}>Air Date: {episodesDetails.air_date}</Text>
      <Text style={styles.text}>Episode: {episodesDetails.episode}</Text>
      <Button
        title={
          isFavorite(episodesDetails)
            ? 'Remove from Favorites'
            : 'Add to Favorites'
        }
        onPress={() => toggleFavorite(episodesDetails)}
      />
      <FlatList
        data={characters}
        renderItem={renderCharacter}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 16,
    textAlign: 'center',
  },
  characterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  characterImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  characterName: {
    fontSize: 16,
  },
});

export default EpisodeScreen;
