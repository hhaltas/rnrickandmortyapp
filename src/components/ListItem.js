import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CardItem from './CardItem';
import {useNavigation} from '@react-navigation/native';
import CardCharacterItem from './CardCharacterItem';

const ListItem = ({
  data,
  renderType,
  onEndReached,
  onEndReachedThreshold,
  ListFooterComponent,
  goTo,
}) => {
  const renderItem = item => {
    return (
      <TouchableOpacity onPress={() => goTo(item.item.id)}>
        <CardItem
          date={item.item.air_date}
          name={item.item.name}
          episode={item.item.episode}
          renderType={renderType}
        />
      </TouchableOpacity>
    );
  };

  const renderCharacterItem = ({item}) => (
    <TouchableOpacity
      style={styles.characterContainer}
      disabled={true}
      onPress={() => {
        console.log('renderCharacterItem', item);
        // goTo(item.id);
      }}>
      <CardItem name={item} renderType="character" />
    </TouchableOpacity>
  );

  const renderEpisodeItem = ({item}) => (
    <TouchableOpacity
      style={styles.characterContainer}
      onPress={() => {
        goTo(item.id);
      }}>
      <CardCharacterItem item={item} />
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={item =>
        renderType === 'character'
          ? renderCharacterItem(item)
          : renderType === 'episode'
          ? renderItem(item)
          : renderEpisodeItem(item)
      }
      keyExtractor={item => item?.id}
      onEndReached={onEndReached}
      onEndReachedThreshold={onEndReachedThreshold}
      ListFooterComponent={ListFooterComponent}
    />
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    width: '40%',
  },
  text: {
    fontSize: 14,
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
