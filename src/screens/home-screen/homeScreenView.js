import React from 'react';
import {View, FlatList, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreenModels from './homeSreenModel';
import HomeScreenController from './homeSreenControllers';
import {RecipeItem} from '../../components/recipeItem';
import {homeScreenStyles} from './homeSreenStyles';

const HomeScreenView = ({model, controller, styles}) => {
  const {recipeList} = model;
  const {goToRecipeScreen, goToCreateScreen} = controller;
  // const styles = homeScreenStyles;

  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Список рецептов</Text>
        <Icon.Button
          name="md-add-circle"
          backgroundColor="#C8271D"
          size={30}
          onPress={goToCreateScreen}
        />
      </View>
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
