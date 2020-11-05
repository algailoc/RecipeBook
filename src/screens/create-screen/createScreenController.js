import {
  addIngredient,
  addRecipe,
  editIngredient,
  removeIngredient,
  removeRecipe,
} from '../../store/actions/recipeActionCreator';
import {Alert} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const CreateScreenController = (model) => {
  const {
    ingredients,
    recipeId,
    recipePic,
    recipeName,
    recipeSteps,
    servings,
    setCurrentIngredient,
    setRecipePic,
    setEditModalVisible,
    setModalVisible,
    dispatch,
    navigation,
    t,
  } = model;

  const addIngredientButton = (name, amount, unit) => {
    dispatch(addIngredient(recipeId, name, amount, unit));
  };

  const addRecipeButtonHandler = () => {
    if (model.recipeName !== '') {
      navigation.navigate('Home');
      dispatch(
        addRecipe(
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

  const backButtonHandler = () => {
    setModalVisible(!model.modalVisible);
  };

  const editIngredientTouchable = (id) => {
    setCurrentIngredient(ingredients.find((item) => id === item.id));
    setEditModalVisible(true);
  };

  const editIngredientButton = ({ingredient}) => {
    console.log('Ingr: ', ingredient);
    dispatch(editIngredient(ingredient));
  };

  const removeRecipeHandler = () => {
    dispatch(removeRecipe(recipeId));
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
        console.log(error);
      },
    );
  };

  const removeIngredientTouchable = (recipeId, id) => {
    dispatch(removeIngredient(recipeId, id));
  };

  return {
    addIngredientButton,
    addRecipeButtonHandler,
    backButtonHandler,
    editIngredientTouchable,
    editIngredientButton,
    editPictureHandler,
    removeIngredientTouchable,
    removeRecipeHandler,
  };
};

export default CreateScreenController;
