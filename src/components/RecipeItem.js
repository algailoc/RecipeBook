import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

export const RecipeItem = ({title, image, styles}) => {
  const BgImage = (props) => {
    if (!image) {
      return (
        <ImageBackground
          style={styles.recipeImage}
          source={require('../assets/img/default_bg.jpg')}>
          {props.children}
        </ImageBackground>
      );
    } else {
      return (
        <ImageBackground style={styles.recipeImage} source={{uri: image}}>
          {props.children}
        </ImageBackground>
      );
    }
  };

  return (
    <View style={styles.recipeItem}>
      <BgImage>
        <View style={styles.titleBackground}>
          <Text style={styles.recipeTitle}>{title}</Text>
        </View>
      </BgImage>
    </View>
  );
};
