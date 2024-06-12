import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Colors} from '../utils/color';

const CardItem = ({name, date, episode, renderType}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemPosition}>
        <Text style={[styles.episodeSeason, {fontSize: name ? 16 : 20}]}>
          {episode}
        </Text>
        <Text style={[styles.date, {fontSize: date ? 16 : 20}]}>{date}</Text>
      </View>
      <View>
        <Text style={[styles.episodeName, {fontSize: name ? 16 : 24}]}>
          {name}
        </Text>
      </View>
    </View>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'column',
    backgroundColor: Colors.secondaryBackground,
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomColor: Colors.separator,
    borderBottomWidth: 1,
    marginTop: 10,
    borderRadius: 5,
  },
  itemContainerEpisode: {
    flexDirection: 'column',
    backgroundColor: Colors.secondaryBackground,
    borderBottomColor: Colors.separator,
  },
  itemPosition: {
    flexDirection: 'row',
  },
  episodeName: {
    color: Colors.label,
    fontSize: 16,
    marginLeft: 10,
  },
  episodeSeason: {
    color: Colors.label,
    marginLeft: 10,
    maxWidth: '50%',
  },
  date: {
    color: Colors.label,
    fontSize: 18,
    marginLeft: 'auto',
  },
});
