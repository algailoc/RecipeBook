import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from '../../utils/common/localisation';

const HomeScreenModels = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const recipeList = useSelector((state) => state.recipesList.recipes);

  return {recipeList, navigation, t, dispatch};
};

export default HomeScreenModels;
