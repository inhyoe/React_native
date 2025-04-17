import { useState } from 'react';
import {
  Button,
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  StatusBar as RNStatusBar,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
// import { LinearGradient } from 'react-native-linear-gradient';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.appContainer}>
        <StatusBar style="dark" />
        <LinearGradient
          colors={['#4e0329', '#ddb52f', '#192f6a']}
          style={styles.rootScreen}
        >
          <StartGameScreen />
        </LinearGradient>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight + 10 : 0,
  },

  rootScreen: {
    flex: 1,
    // backgroundColor: '#ddb52b',
  },
});
