import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FavoriesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>favoriesIndex</Text>
    </SafeAreaView>
  );
};

export default FavoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
