import 'react-native-gesture-handler';
import React from 'react';
import {Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home-screen/HomeScreen';
import RecipeScreen from '../screens/recipe-screen/RecipeScreen';
import CreateScreen from '../screens/create-screen/CreateScreen';
import {useTranslation} from '../utils/common/localisation';

const Stack = createStackNavigator();

export const AppNavigation = () => {
  const {t} = useTranslation();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {backgroundColor: '#C8271D'},
        headerTintColor: '#fff',
        headerTitleStyle: {
          alignSelf: 'center',
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: t('recipe_list'),
          headerShown: true,
          headerLeft: () => <Button title="" color="#C8271D" />,
        }}
      />
      <Stack.Screen
        name="Recipe"
        component={RecipeScreen}
        options={({route}) => ({
          title: route.params.title,
        })}
      />
      <Stack.Screen
        name="New recipe"
        component={CreateScreen}
        options={{
          title: t('new_recipe'),
          headerTitleStyle: {alignSelf: 'center', fontWeight: 'bold'},
          headerRight: () => <Button title="" color="#C8271D" />,
        }}
      />
    </Stack.Navigator>
  );
};
