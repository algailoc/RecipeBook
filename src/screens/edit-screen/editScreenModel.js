import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from '../../utils/common/localisation';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';

const EditScreenModel = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const route = useRoute();

  const {id} = route.params;

  const recipeList = useSelector((state) => state.recipe.recipes);
  const recipe = recipeList.find((item) => item.id === id);

  const [currentIngredients, setCurrentIngredients] = useState(
    recipe.ingredients,
  );
  const [recipeName, setRecipeName] = useState(recipe.title);
  const [recipeSteps, setRecipeSteps] = useState(recipe.steps);
  const [recipePic, setRecipePic] = useState(recipe.img);
  const [servings, setServings] = useState(recipe.servings);

  return {
    id,
    recipeName,
    currentIngredients,
    recipeSteps,
    recipePic,
    servings,

    setRecipeName,
    setCurrentIngredients,
    setRecipeSteps,
    setRecipePic,
    setServings,

    navigation,
    dispatch,
    t,
  };
};

export default EditScreenModel;
