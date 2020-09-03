import React from 'react';
import {
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
  LogBox,
} from 'react-native';
import {AddIngredientDialog} from '../../components/addIngredientDialog';

LogBox.ignoreLogs([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

export const CreateScreenView = ({styles, model, controller}) => {
  const {
    currentIngredients,
    setRecipeSteps,
    setRecipeName,
    recipeName,
    recipeSteps,
    t,
  } = model;
  const {removeIngredientTouchable, addRecipeButtonHandler} = controller;

  return (
    <ScrollView>
      <TextInput
        value={recipeName}
        onChangeText={(text) => setRecipeName(text)}
        placeholder={t('recipe_name')}
        maxLength={30}
        style={styles.recipeName}
      />
      <FlatList
        data={currentIngredients}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.items}
              onLongPress={() => removeIngredientTouchable(item.id)}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemText}>{item.amount}</Text>
            </TouchableOpacity>
          );
        }}
      />
      <Text style={styles.helper}>{t('ingredients_removal_help')}</Text>
      <AddIngredientDialog model={model} controller={controller} />
      <TextInput
        placeholder={t('recipe_input')}
        style={styles.stepsInput}
        multiline={true}
        value={recipeSteps}
        onChangeText={(text) => setRecipeSteps(text)}
      />
      <TouchableOpacity
        style={styles.createRecipeButton}
        onPress={() =>
          addRecipeButtonHandler(
            recipeName,
            recipeSteps.toString(),
            currentIngredients,
          )
        }>
        <Text style={styles.createRecipeButtonText}>{t('add_complete')}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
