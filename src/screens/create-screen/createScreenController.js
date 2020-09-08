import {addRecipe} from '../../store/actions/recipeActionCreator';
import {Alert} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const CreateScreenController = (model) => {
  const {
    currentIngredients,
    recipePic,
    recipeName,
    recipeSteps,
    servings,
    setCurrentIngredients,
    setRecipePic,
    dispatch,
    navigation,
    t,
  } = model;

  const addIngredientButton = (name, amount) => {
    setCurrentIngredients((prevState) => [
      ...prevState,
      {
        id: Date.now().toString(),
        name,
        amount,
      },
    ]);
  };

  const addRecipeButtonHandler = () => {
    if (model.recipeName !== '') {
      const id = Date.now().toString();
      dispatch(
        addRecipe(
          id,
          recipeName,
          recipeSteps,
          currentIngredients,
          recipePic,
          servings,
        ),
      );
      navigation.navigate('Home');
    } else {
      Alert.alert('', t('alert_name_empty'), [{text: ''}, {text: ''}], {
        cancelable: true,
      });
    }
  };

  const backButtonHandler = () => {
    Alert.alert(
      t('alert_go_back_title') + '?',
      t('alert_go_back_message'),
      [
        {text: t('alert_cancel'), style: 'negative'},
        {text: ''},
        {text: t('alert_confirm'), onPress: () => navigation.goBack()},
      ],
      {
        cancelable: true,
      },
    );
  };

  const editPictureHandler = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 200,
      cropping: true,
    }).then(
      (image) => {
        console.log({uri: image.path});
        setRecipePic({uri: image.path});
      },
      (error) => {
        console.log(error);
      },
    );
  };

  const removeIngredientTouchable = (id) => {
    setCurrentIngredients(currentIngredients.filter((item) => id !== item.id));
  };

  return {
    addIngredientButton,
    addRecipeButtonHandler,
    backButtonHandler,
    editPictureHandler,
    removeIngredientTouchable,
  };
};

export default CreateScreenController;
