import {
  Text,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  View,
  Image,
  Button,
  Touchable,
  TouchableOpacity,
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
import {Modal, ModalContent} from 'react-native-modals';
import NotificationCard from '../../components/NotificationCard';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../utils/color';
import ListItem from '../../components/ListItem';
import {retry} from '@reduxjs/toolkit/query';

const EpisodeScreen = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {loading, episodesDetails, error} = useSelector(
    state => state.episodesDetails,
  );
  const [characters, setCharacters] = useState([]);
  const renderCharacter = true;

  useEffect(() => {
    console.log('route', route?.params?.episodeId);
    dispatch(fetchEpisodeDetail(route?.params?.episodeId));
  }, [dispatch]);

  useEffect(() => {
    const fetchCharacters = async () => {
      if (episodesDetails) {
        const characterData = await Promise.all(
          episodesDetails.characters.map(async url => {
            console.log('fetcchar', url);
            const response = await axios.get(url);
            return response.data;
          }),
        );
        setCharacters(characterData);
      }
    };
    fetchCharacters();
  }, [episodesDetails]);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color={Colors.separator} />
      </View>
    );
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  if (!episodesDetails) {
    return null;
  }

  const goToCharacter = item => {
    navigation.navigate('Character', {characterId: item});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: '100%',
          margin: 10,
          paddingLeft: 5,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={styles.title}>{episodesDetails.name}</Text>
        <View
          style={{
            width: '45%',
          }}>
          <Text style={styles.text}>{episodesDetails.air_date}</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          margin: 10,
          paddingLeft: 5,
          flexDirection: 'column',
        }}>
        <Text style={styles.text}>Episode: {episodesDetails.episode}</Text>
        <ListItem
          data={characters}
          renderType={'episodeDetail'}
          keyExtractor={characters.id}
          goTo={goToCharacter}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    width: '40%',
  },
  text: {
    fontSize: 18,
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
