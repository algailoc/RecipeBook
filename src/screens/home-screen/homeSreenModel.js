import {useSelector} from 'react-redux';

const HomeScreenModels = () => {
  const recipeList = useSelector((state) => state.recipe.recipes);

  return {recipeList};
};

export default HomeScreenModels;
