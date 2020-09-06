import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { Home } from './screen/Home';
import Profile from './screen/Profile';
import CreateEmployee from './screen/CreateEmployee';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      {/* <CreateEmployee /> */}
      <Profile />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    marginTop: Constants.statusBarHeight,
  },
};
