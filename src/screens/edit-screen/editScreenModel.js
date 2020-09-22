import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from '../../utils/common/localisation';
import {useNavigation} from '@react-navigation/native';

const EditScreenModel = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const recipe = useSelector((state) => state.recipe.recipe);

  const [currentIngredients, setCurrentIngredients] = useState(
    recipe.ingredients,
  );

  const [recipeId, setRecipeId] = useState(recipe.id);
  const [recipeName, setRecipeName] = useState(recipe.title);
  const [recipeSteps, setRecipeSteps] = useState(recipe.steps);
  const [recipePic, setRecipePic] = useState(recipe.imagePath);
  const [servings, setServings] = useState(recipe.servings);

  return {
    recipeId,
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
