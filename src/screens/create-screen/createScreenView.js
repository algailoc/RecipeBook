import React from 'react';
import {
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
  LogBox,
} from 'react-native';
import {AddIngredientDialog} from './addIngredientDialog';

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
  const {removeIngredientTouchable} = controller;

  return (
    <ScrollView>
      <TextInput
        value={recipeName}
        onChangeText={(text) => setRecipeName(text)}
        placeholder={t('recipe_name')}
      />
      <FlatList
        data={currentIngredients}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.items}
              onLongPress={() => removeIngredientTouchable(item.id)}>
              <Text>{item.name}</Text>
              <Text>{item.amount}</Text>
            </TouchableOpacity>
          );
        }}
      />
      <AddIngredientDialog model={model} controller={controller} />
      <TextInput
        placeholder={t('recipe_input')}
        style={styles.stepsInput}
        multiline={true}
        value={recipeSteps}
        onChangeText={(text) => setRecipeSteps(text)}
      />
    </ScrollView>
  );
};
