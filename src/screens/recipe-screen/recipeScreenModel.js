import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from '../../utils/common/localisation';
import {getRecipe} from '../../store/actions/recipeActionCreator';

const RecipeScreenModel = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const navigation = useNavigation();

  const {id} = route.params;

  const [title, setTitle] = useState();
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState('');
  const [servings, setServings] = useState('');

  const [isOpened, setIsOpened] = useState(false);

  const recipe = useSelector((state) => state.recipe.recipe);
  // const recipe = recipeList.find((item) => item.id === id);

  useEffect(() => {
    if (id !== '') {
      dispatch(getRecipe(id));
      // let recipe = recipeList.find((item) => item.id === id);
      setTitle(recipe.title);
      // setIngredients(recipe.ingredients);
      setSteps(recipe.steps);
      setServings(recipe.servings);
    }
  }, [id]);

  return {
    id,
    title,
    ingredients,
    recipe,
    steps,
    servings,
    // recipeList,
    isOpened,

    setIngredients,
    setIsOpened,
    setServings,
    // servingsChanged,

    t,
    navigation,
    dispatch,
  };
};

export default RecipeScreenModel;
