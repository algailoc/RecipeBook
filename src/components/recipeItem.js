import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

export const RecipeItem = ({title, image, styles}) => {
  return (
    <View style={styles.recipeItem}>
      <ImageBackground style={styles.recipeImage} source={image}>
        <View style={styles.titleBackground}>
          <Text style={styles.recipeTitle}>{title}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};
