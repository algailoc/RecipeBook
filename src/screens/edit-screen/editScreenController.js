import {
  addIngredient,
  editIngredient,
  editRecipe,
  removeIngredient,
} from '../../store/actions/recipeActionCreator';
import {Alert} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const EditScreenController = (model) => {
  const {
    recipeId,
    recipePic,
    recipeName,
    recipeSteps,
    servings,
    ingredients,
    setCurrentIngredient,
    setEditModalVisible,
    setRecipePic,
    setModalVisible,
    dispatch,
    navigation,
    t,
  } = model;

  const addIngredientButton = (name, amount, unit) => {
    dispatch(addIngredient(recipeId, name, amount, unit));
  };

  const backButtonHandler = () => {
    setModalVisible(!model.modalVisible);
  };

  const removeRecipeHandler = () => {};

  const editIngredientTouchable = (id) => {
    setCurrentIngredient(ingredients.find((item) => id === item.id));
    setEditModalVisible(true);
  };

  const editIngredientButton = ({ingredient}) => {
    console.log('Ingr: ', ingredient);
    dispatch(editIngredient(ingredient));
  };

  const editPictureHandler = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 150,
      cropping: true,
    }).then(
      (image) => {
        setRecipePic(image.path);
      },
      (error) => {
        console.log('Image picker error:', error);
      },
    );
  };

  const editRecipeButtonHandler = () => {
    if (model.recipeName !== '') {
      navigation.navigate('Home');
      dispatch(
        editRecipe(
          recipeId,
          recipeName,
          recipeSteps,
          ingredients,
          recipePic,
          servings,
        ),
      );
    } else {
      Alert.alert('', t('alert_name_empty'), [{text: ''}, {text: ''}], {
        cancelable: true,
      });
    }
  };

  const removeIngredientTouchable = (recipeId, id) => {
    dispatch(removeIngredient(recipeId, id));
  };

  return {
    addIngredientButton,
    backButtonHandler,
    editRecipeButtonHandler,
    editPictureHandler,
    removeIngredientTouchable,
    removeRecipeHandler,
    editIngredientTouchable,
    editIngredientButton,
  };
};

export default EditScreenController;
