import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Colors} from '../utils/color';

const CardCharacterItem = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={{uri: item.image}} style={styles.characterImage} />
      <Text style={styles.characterName}>{item.name}</Text>
    </View>
  );
};

export default CardCharacterItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.secondaryBackground,
    width: '100%',
    borderBottomColor: Colors.separator,
    height: 70,
    borderRadius: 5,
    alignItems: 'center',
  },

  characterName: {
    color: Colors.label,
    fontSize: 16,
    marginLeft: 10,
    textAlign: 'center',
  },
  characterImage: {
    marginLeft: 10,
    color: Colors.label,
    width: 50,
    height: 50,
    borderRadius: 5,
    resizeMode: 'contain',
  },
});
