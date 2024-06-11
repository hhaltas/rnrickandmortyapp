import {
  ActivityIndicator,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCharacters} from '../../store/characters/characterActions';
import {
  addFavorite,
  loadFavoritesFromStorage,
  removeFavorite,
  saveFavoritesToStorage,
} from '../../store/favorite/favoriteActions';
import ListItem from '../../components/ListItem';
import CardItem from '../../components/CardItem';
import {Colors} from '../../utils/color';
import NotificationCard from '../../components/NotificationCard';

const CharacterScreen = ({route}) => {
  const dispatch = useDispatch();
  const {loading, characters, error} = useSelector(state => state.characters);
  const {favorites, error: favoriteError} = useSelector(
    state => state.favorite,
  );
  const [isSelected, setIsSelected] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);
  const [message, setMessage] = useState(null);
  useEffect(() => {
    dispatch(fetchCharacters(route.params.characterId));
    dispatch(loadFavoritesFromStorage());
  }, [dispatch]);

  useEffect(() => {
    dispatch(saveFavoritesToStorage(favorites));
  }, [favorites, dispatch]);

  const handleCloseModal = () => {
    setVisibleModal(false);
  };
  const isFavorite = episode => {
    return favorites.some(fav => fav.id === episode.id);
  };

  const toggleFavorite = character => {
    if (isFavorite(character)) {
      setMessage('Are you sure you want to delete your favorite character?');

      setVisibleModal(true);
    } else {
      if (favorites.length < 10) {
        dispatch(addFavorite(character));
      } else {
        setMessage('You can only add up to 10 favorite episodes.');
        setVisibleModal(true);
      }
    }
  };
  const handleRemoveData = character => {
    dispatch(removeFavorite(character));
    setVisibleModal(false);
  };

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

  const notificationCardVisible = () => {
    setVisibleModal(false);
  };

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          margin: 10,
          width: '100%',
          justifyContent: 'center',
        }}>
        <View style={{width: '28%'}}>
          <Image
            style={styles.image}
            source={{uri: characters.image}}
            resizeMode="contain"
          />
        </View>
        <View style={{flexDirection: 'column', width: '40%'}}>
          <Text style={styles.textName}>{characters.name}</Text>
          <Text style={styles.text}>Gender : {characters.gender}</Text>
          <Text style={styles.text}>Species : {characters.species}</Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            width: '32%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              setIsSelected(!isSelected);
              toggleFavorite(characters);
            }}
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={require('../../assets/image/favorite.png')}
              style={{
                width: 40,
                height: 40,
                resizeMode: 'contain',
                tintColor: isFavorite(characters)
                  ? Colors.favorite
                  : Colors.unFavorite,
              }}
            />
            <Text
              style={[
                styles.text,
                {
                  color: isFavorite(characters)
                    ? Colors.favorite
                    : Colors.unFavorite,
                  marginTop: 5,
                },
              ]}>
              {isFavorite(characters) ? 'Remove ' : 'Add '}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'column',
          marginLeft: 10,
          marginRight: 10,
          width: '100%',
        }}>
        <Text style={styles.text}>Origin: {characters?.origin?.name}</Text>
        <Text style={styles.text}>Status: {characters?.status}</Text>
      </View>
      <View
        style={{
          flexDirection: 'column',
          margin: 10,
        }}>
        <Text style={{textAlign: 'center', fontSize: 20}}>Episode List</Text>
        <ListItem data={characters.episode} renderType={'character'} />
        <NotificationCard
          visibleModal={visibleModal}
          onTouchOutside={notificationCardVisible}
          handleCloseModal={handleCloseModal}
          handleRemoveData={handleRemoveData}
          titleOK={'Yes'}
          titleNO={'Nn'}
          dataText={message}
          characters={characters}
        />
      </View>
    </SafeAreaView>
  );
};

export default CharacterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  textName: {
    fontSize: 20,
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 16,
  },
  characterContainer: {
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
