import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import HomeScreen from './src/screens/HomeScreen'
import MatchesScreen from './src/screens/MatchesScreen'
const App = () => {
  const onSwipeLeft=(user)=>{
    console.warn('Swiped Left',user.name)
  }
  const onSwipeRight=(user)=>{
    console.warn('Swiped Right',user.name)
  }
  return (
    <View style={styles.PageContainer}>
      <MatchesScreen />
    </View>
  );
};
const styles = StyleSheet.create({
  PageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;
