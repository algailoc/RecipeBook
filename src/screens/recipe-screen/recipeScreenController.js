import {removeRecipe} from '../../store/actions/recipeActionCreator';

const RecipeScreenController = (model) => {
  const {setServings, ingredients, setModalVisible} = model;

  const deleteRecipe = () => {
    model.setIsOpened(false);
    setModalVisible(!model.modalVisible);
  };

  const removeRecipeHandler = () => {
    model.dispatch(removeRecipe(model.id));
  };

  const editButtonHandler = () => {
    model.setIsOpened(!model.isOpened);
  };

  const goToEdit = () => {
    model.setIsOpened(false);
    const id = model.id;
    model.navigation.navigate('Edit recipe', {id});
  };

  const servingsChanged = (value) => {
    let prevValue = model.servings;
    setServings(value);
    ingredients.map((item) => {
      console.log(item.name, item.amount, ' is a ', typeof item.amount);
      if (typeof item.amount === 'string') {
        return item.amount;
      } else {
        let n = (item.amount / prevValue) * value;
        n === 0
          ? (item.amount = '')
          : (item.amount = Math.round(n * 100) / 100);
      }
    });
  };
  return {
    deleteRecipe,
    editButtonHandler,
    goToEdit,
    servingsChanged,
    removeRecipeHandler,
  };
};

export default RecipeScreenController;
