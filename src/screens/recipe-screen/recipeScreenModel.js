import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/native';

const RecipeScreenModel = () => {
  const route = useRoute();
  const {id} = route.params;

  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState('');

  const recipeList = useSelector((state) => state.recipe.recipes);

  useEffect(() => {
    if (id !== '') {
      let recipe = recipeList.find((item) => item.id === id);
      setTitle(recipe.title);
      setIngredients(recipe.ingredients);
      setSteps(recipe.steps);
      console.log(recipe.title);
    }
  }, [id, recipeList]);

  return {title, ingredients, steps};
};

export default RecipeScreenModel;
