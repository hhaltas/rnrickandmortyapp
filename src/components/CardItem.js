import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Colors} from '../utils/color';

const CardItem = ({episodeName, date, episode}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemPosition}>
        <Text style={styles.episodeSeason}>{episode}</Text>

        <Text style={styles.date}>{date}</Text>
      </View>

      <View>
        <Text style={styles.episodeName}>{episodeName}</Text>
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
    margin: 5,
    borderRadius: 5,
  },
  itemPosition: {
    flexDirection: 'row',
  },
  episodeName: {
    color: Colors.label,
    fontSize: 20,
    marginLeft: 10,
  },
  episodeSeason: {
    color: Colors.label,
    fontSize: 20,
    marginLeft: 10,
    maxWidth: '50%',
  },
  date: {
    color: Colors.inActive,
    fontSize: 18,
    marginLeft: 'auto',
  },
});
