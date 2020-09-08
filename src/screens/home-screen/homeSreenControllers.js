const HomeScreenController = (model) => {
  const goToCreateScreen = () => {
    model.navigation.navigate('New recipe');
  };

  const goToRecipeScreen = (id, title) => {
    model.navigation.navigate('Recipe', {id, title});
  };

  return {goToRecipeScreen, goToCreateScreen};
};

export default HomeScreenController;
