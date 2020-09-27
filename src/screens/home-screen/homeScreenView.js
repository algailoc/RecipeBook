import React from 'react';
import {View, FlatList, TouchableOpacity, ImageBackground} from 'react-native';
import {RecipeItem} from '../../components/RecipeItem';
import Icon from 'react-native-vector-icons/AntDesign';
import {LanguageSettingsModal} from '../../components/LanguageSettingsDialogue';

const HomeScreenView = ({model, controller, styles}) => {
  const {recipeList, drawerIsOpen} = model;
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
                image={item.imagePath}
                styles={styles}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </ImageBackground>
      <View style={styles.newRecipeButton}>
        <Icon.Button
          style={{underlayColor: '#fff'}}
          onPress={controller.goToNewRecipe}
          name="pluscircle"
          color="#C8271D"
          size={60}
          borderRadius={100}
          iconStyle={{marginRight: -10, margin: -10}}
          backgroundColor="#fff"
        />
      </View>
      <LanguageSettingsModal model={model} controller={controller} />
    </View>
  );
};

export default HomeScreenView;
