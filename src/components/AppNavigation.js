import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home-screen/HomeScreen';
import RecipeScreen from '../screens/recipe-screen/RecipeScreen';
import CreateScreen from '../screens/create-screen/CreateScreen';

const Stack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {backgroundColor: '#C8271D'},
        headerTintColor: '#fff',
        headerTitleStyle: {
          marginLeft: '30%',
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
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
          title: 'Новый рецепт',
          headerTitleStyle: {marginLeft: '20%', fontWeight: 'bold'},
        }}
      />
    </Stack.Navigator>
  );
};
