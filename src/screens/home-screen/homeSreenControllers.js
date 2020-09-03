const HomeScreenController = (model) => {
  const goToRecipeScreen = (id, title) => {
    // setRecipeId(id);
    console.log(id, title);
    model.navigation.navigate('Recipe', {id, title});
  };

  const goToCreateScreen = () => {
    model.navigation.navigate('New recipe');
  };

  return {goToRecipeScreen, goToCreateScreen};
};

export default HomeScreenController;
