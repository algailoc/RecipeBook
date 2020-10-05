import {
  LOAD_RECIPES_LIST,
  LOAD_RECIPES_LIST_BEGIN,
  LOAD_RECIPES_LIST_ERROR,
  LOAD_RECIPES_LIST_FINISHED,
} from '../types/recipesListTypes';
import {
  ADD_RECIPE_FINISHED,
  CREATE_RECIPE_FINISHED,
  EDIT_RECIPE_FINISHED,
  REMOVE_RECIPE_FINISHED,
} from '../types/recipeTypes';

const initialState = {
  recipes: [],
};

export const recipesListReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RECIPES_LIST: {
      return state;
    }

    case LOAD_RECIPES_LIST_BEGIN: {
      return state;
    }

    case LOAD_RECIPES_LIST_FINISHED: {
      return {
        ...state,
        recipes: action.payload,
      };
    }

    case LOAD_RECIPES_LIST_ERROR: {
      console.log('Error on getting list of recipes: ', action.payload);
      return state;
    }

    // case CREATE_RECIPE_FINISHED: {
    //   return {
    //     ...state,
    //     recipes: [...state.recipes, {id: action.payload.id}],
    //   };
    // }

    case ADD_RECIPE_FINISHED: {
      return {
        ...state,
        recipes: [
          ...state.recipes,
          {
            id: action.payload.id,
            title: action.payload.title,
            imagePath: action.payload.imagePath,
          },
        ],
      };
    }

    case REMOVE_RECIPE_FINISHED: {
      return {
        ...state,
        recipes: state.recipes.filter((item) => item.id !== action.payload),
      };
    }

    case EDIT_RECIPE_FINISHED: {
      return {
        ...state,
        recipes: state.recipes.map((item) => {
          if (item.id === action.payload.id) {
            item.title = action.payload.title;
            item.imagePath = action.payload.imagePath;
          }
          return item;
        }),
      };
    }

    default: {
      return state;
    }
  }
};
