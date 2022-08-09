import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header'

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Header>LOGO</Header>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight:900,
    fontSize:32,
  },
});
