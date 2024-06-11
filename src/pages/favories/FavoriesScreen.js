import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useSelector} from 'react-redux';
import ListItem from '../../components/ListItem';
import NotificationCard from '../../components/NotificationCard';

const FavoriesScreen = ({navigation}) => {
  const {favorites, error: favoriteError} = useSelector(
    state => state.favorite,
  );
  const [visibleModal, setVisibleModal] = useState(false);

  const goToCharacter = item => {
    navigation.navigate('Character', {characterId: item});
  };

  const notificationCardVisible = () => {
    setVisibleModal(!visibleModal);
  };

  return (
    <SafeAreaView style={styles.container}>
      {favorites.length == 0 && (
        <Text style={styles.errorText}>Not Favorite Character</Text>
      )}
      {favoriteError ? (
        <Text style={styles.errorText}>{favoriteError}</Text>
      ) : null}
      <ListItem
        data={favorites}
        renderType={'episodeDetail'}
        keyExtractor={favorites.id}
        goTo={goToCharacter}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
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
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default FavoriesScreen;
