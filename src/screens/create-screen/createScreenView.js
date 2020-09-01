import React from 'react';
import {ScrollView, View, TextInput, Button} from 'react-native';

export const CreateScreenView = ({styles, model, controller}) => {
  const {numberOfInputs} = model;
  const {addIngredientInput} = controller;

  return (
    <ScrollView>
      <Button title="Готово" />
      <TextInput placeholder="Название" />
      <TextInput placeholder="Ингредиент" />
      <View>
        {numberOfInputs.map((item, index) => (
          <TextInput key={index} placeholder="Input" />
        ))}
      </View>
      <Button title="Добавить ингредиент" onPress={addIngredientInput} />
      <TextInput
        placeholder="Рецепт"
        style={styles.stepsInput}
        multiline={true}
      />
    </ScrollView>
  );
};
