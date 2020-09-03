import {addRecipe} from '../../store/actions/recipeActionCreator';
import {Alert} from 'react-native';

const CreateScreenController = (model) => {
  const {
    currentIngredients,
    setCurrentIngredients,
    dispatch,
    navigation,
    t,
  } = model;

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

  const addRecipeButtonHandler = (title, steps, ingredients) => {
    if (model.recipeName !== '') {
      const id = Date.now().toString();
      dispatch(addRecipe(id, title, steps, ingredients));
      navigation.navigate('Home');
    } else {
      Alert.alert('', t('alert_name_empty'), [{text: ''}, {text: ''}], {
        cancelable: true,
      });
    }
  };

  const removeIngredientTouchable = (id) => {
    setCurrentIngredients(currentIngredients.filter((item) => id !== item.id));
  };

  const backButtonHandler = () => {
    Alert.alert(
      (t('alert_go_back_title') + '?'),
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

  return {
    addIngredientButton,
    removeIngredientTouchable,
    addRecipeButtonHandler,
    backButtonHandler,
  };
};

export default CreateScreenController;
