import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from '../../utils/common/localisation';

const RecipeScreenModel = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const navigation = useNavigation();

  const {id} = route.params;

  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState('');
  const [servings, setServings] = useState('');

  const [isOpened, setIsOpened] = useState(false);

  const recipeList = useSelector((state) => state.recipe.recipes);

  const [initialIngredients, setInitialIngredients] = useState([]);

  useEffect(() => {
    if (id !== '') {
      let recipe = recipeList.find((item) => item.id === id);
      setTitle(recipe.title);
      setIngredients(recipe.ingredients);
      setSteps(recipe.steps);
      setServings(recipe.servings);
      setInitialIngredients(recipe.ingredients);
    }
  }, [id, recipeList]);

  const servingsChanged = (value) => {
    // ingredients.map((item) => {
    //   item.amount = initialIngredients.amount;
    // });
    setServings(value);
    ingredients.map((item) => {  //changes the global state
      item.amount += value;
    });
    console.log(recipeList.find((item) => item.id === id));
  };

  return {
    id,
    title,
    ingredients,
    steps,
    servings,
    recipeList,
    isOpened,

    setIsOpened,
    setServings,
    servingsChanged,

    t,
    navigation,
    dispatch,
  };
};

export default RecipeScreenModel;
