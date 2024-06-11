import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import CardItem from '../../components/CardItem';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const {loading, episodes, error} = useSelector(state => state.episodes);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={episodes}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Episode', {episodeId: item.id})
              }>
              <CardItem
                date={item.air_date}
                episodeName={item.name}
                episode={item.episode}
              />
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
