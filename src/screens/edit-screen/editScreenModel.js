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

  return {
    currentIngredients,
    recipeName,
    recipeSteps,
    setCurrentIngredients,
    setRecipeSteps,
    setRecipeName,
    navigation,
    dispatch,
    recipePic,
    setRecipePic,
    id,
    t,
  };
};

export default EditScreenModel;
