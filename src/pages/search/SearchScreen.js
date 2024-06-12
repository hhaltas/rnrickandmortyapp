import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  searchCharacters,
  searchEpisodes,
} from '../../store/search/searchActions';
import CardCharacterItem from '../../components/CardCharacterItem';
import CardItem from '../../components/CardItem';

const SearchScreen = ({navigation}) => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const {loading, characters, episodes, error} = useSelector(
    state => state.search,
  );

  const handleSearch = () => {
    if (query) {
      dispatch(searchCharacters(query));
      dispatch(searchEpisodes(query));
    }
  };
  const goToCharacter = item => {
    navigation.navigate('Character', {characterId: item});
  };

  const goToEpisode = item => {
    navigation.navigate('Episode', {episodeId: item});
  };

  const renderCharacter = ({item}) => (
    <TouchableOpacity
      style={styles.characterContainer}
      onPress={() => {
        goToCharacter(item.id);
      }}>
      <CardCharacterItem item={item} renderType={'character'} />
    </TouchableOpacity>
  );

  const renderEpisode = ({item}) => (
    <TouchableOpacity onPress={() => goToEpisode(item.id)}>
      <CardItem name={item.name} renderType={''} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search characters or episodes"
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Search" onPress={handleSearch} />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : (
        <FlatList
          data={[...characters, ...episodes]}
          renderItem={({item}) =>
            item.image ? renderCharacter({item}) : renderEpisode({item})
          }
          keyExtractor={item => item.id.toString()}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  characterContainer: {
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
  resultContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  resultImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  resultText: {
    fontSize: 16,
  },
});

export default SearchScreen;
