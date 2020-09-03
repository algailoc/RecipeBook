import React from 'react';
import {View, FlatList, TouchableOpacity, ImageBackground} from 'react-native';
import {RecipeItem} from '../../components/recipeItem';

const HomeScreenView = ({model, controller, styles}) => {
  const {recipeList} = model;
  const {goToRecipeScreen} = controller;

  return (
    <View>
      <ImageBackground
        source={require('../../assets/img/background-1.jpg')}
        style={styles.imageBkg}>
        <FlatList
          style={styles.recipeList}
          data={recipeList}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => goToRecipeScreen(item.id, item.title)}>
              <RecipeItem
                style={styles.recipeItem}
                title={item.title}
                image={item.img}
                styles={styles}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </ImageBackground>
    </View>
  );
};

export default HomeScreenView;
