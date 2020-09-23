import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
  LogBox,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {AddIngredientDialog} from '../../components/AddIngredientDialog';
import {ServingsDropDown} from '../../components/ServingsDropDown';

LogBox.ignoreLogs([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

export const CreateScreenView = ({styles, model, controller}) => {
  const {
    currentIngredients,
    servings,
    setRecipeSteps,
    setRecipeName,
    setServings,
    recipeName,
    recipeSteps,
    t,
  } = model;
  const {
    removeIngredientTouchable,
    addRecipeButtonHandler,
    editPictureHandler,
  } = controller;

  return (
    <View>
      <ScrollView style={{height: '90%'}}>
        <TextInput
          value={recipeName}
          onChangeText={(text) => setRecipeName(text)}
          placeholder={t('recipe_name')}
          maxLength={30}
          style={styles.recipeName}
        />
        <Text style={styles.section}>{t('ingredients_list')}</Text>
        <FlatList
          data={currentIngredients}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.items}
                onLongPress={() => removeIngredientTouchable(item.id)}>
                <Text style={styles.itemText}>{item.name}</Text>
                <View style={styles.measurementWrapper}>
                  <Text style={styles.itemText}>{item.amount}</Text>
                  <Text style={styles.itemText}>{item.unit}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        <Text style={styles.tip}>{t('ingredients_removal_help')}</Text>
        <ServingsDropDown servings={servings} setServings={setServings} />
        <AddIngredientDialog model={model} controller={controller} />
        <Text style={styles.section}>{t('recipe_description')}</Text>
        <TextInput
          placeholder={t('recipe_input')}
          style={styles.stepsInput}
          multiline={true}
          value={recipeSteps}
          onChangeText={(text) => setRecipeSteps(text)}
        />
        <TouchableOpacity
          style={styles.touchableWrapper}
          onPress={editPictureHandler}>
          <Text style={styles.buttonText}>{t('image_button')}</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={{height: '10%'}}>
        <Icon.Button
          name="checkcircle"
          size={30}
          style={styles.createRecipeButton}
          backgroundColor="#fff"
          onPress={addRecipeButtonHandler}>
          <Text style={styles.createRecipeButtonText}>{t('add_complete')}</Text>
        </Icon.Button>
      </View>
    </View>
  );
};
