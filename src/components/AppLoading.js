import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';

export const AppLoading = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>My Recipes</Text>
      <Animatable.Image
        animation="pulse"
        easing="ease-in-out"
        iterationCount="infinite"
        source={require('../assets/img/app_icon.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 250,
    width: 250,
  },
  text: {
    fontSize: 30,
    fontFamily: 'Merriweather-Regular',
    color: '#C8271D',
    marginBottom: 20,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
