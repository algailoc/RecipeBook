import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from '../../utils/common/localisation';

const HomeScreenModels = () => {
  const navigation = useNavigation();

  const {t} = useTranslation();

  const recipeList = useSelector((state) => state.recipe.recipes);

  return {recipeList, navigation, t};
};

export default HomeScreenModels;
