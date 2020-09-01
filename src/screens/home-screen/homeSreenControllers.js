import {useNavigation} from '@react-navigation/native';

const HomeScreenController = () => {
  const navigation = useNavigation();

  const goToRecipeScreen = (id, title) => {
    // setRecipeId(id);
    console.log(id, title);
    navigation.navigate('Recipe', {id, title});
  };

  const goToCreateScreen = () => {
    navigation.navigate('New recipe');
  };

  return {goToRecipeScreen, goToCreateScreen};
};

export default HomeScreenController;
