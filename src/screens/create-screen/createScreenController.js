const CreateScreenController = (model) => {
  const {currentIngredients, setCurrentIngredients} = model;

  const addIngredientButton = (name, amount) => {
    setCurrentIngredients((prevState) => [
      ...prevState,
      {
        id: (prevState.length + 1).toString(),
        name,
        amount,
      },
    ]);
  };

  const removeIngredientTouchable = (id) => {
    setCurrentIngredients(currentIngredients.filter((item) => id !== item.id));
  };

  return {addIngredientButton, removeIngredientTouchable};
};

export default CreateScreenController;
