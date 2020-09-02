import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {RecipeItem} from '../../components/recipeItem';

const HomeScreenView = ({model, controller, styles}) => {
  const {recipeList} = model;
  const {goToRecipeScreen} = controller;

  return (
    <View>
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
    </View>
  );
};

export default HomeScreenView;
