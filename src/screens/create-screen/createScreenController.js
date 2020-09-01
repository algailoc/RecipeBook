import React from 'react';
import CreateScreenModel from './createScreenModel';

const CreateScreenController = () => {
  const {numberOfInputs, setNumberOfInputs} = CreateScreenModel();

  const addIngredientInput = () => {
    setNumberOfInputs((prevState) => [
      ...prevState,
      'input-' + prevState.length,
    ]);
    console.log(numberOfInputs);
  };

  return {addIngredientInput};
};

export default CreateScreenController;
