import {
  ADD_RECIPE,
  ADD_RECIPE_BEGIN,
  ADD_RECIPE_ERROR,
  ADD_RECIPE_FINISHED,
  CREATE_RECIPE,
  CREATE_RECIPE_BEGIN,
  CREATE_RECIPE_ERROR,
  CREATE_RECIPE_FINISHED,
  EDIT_RECIPE,
  EDIT_RECIPE_BEGIN,
  EDIT_RECIPE_ERROR,
  EDIT_RECIPE_FINISHED,
  GET_RECIPE_BEGIN,
  GET_RECIPE_ERROR,
  GET_RECIPE_FINISHED,
  REMOVE_RECIPE,
  REMOVE_RECIPE_BEGIN,
  REMOVE_RECIPE_ERROR,
  REMOVE_RECIPE_FINISHED,
} from '../types/recipeTypes';

const initialState = {
  recipe: {},
};

export const recipeReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPE_BEGIN: {
      return state;
    }

    case GET_RECIPE_FINISHED: {
      return {
        ...state,
        recipe: action.payload,
      };
    }

    case GET_RECIPE_ERROR: {
      console.log('Error on getting recipe:', action.payload);
      return state;
    }

    case CREATE_RECIPE: {
      return state;
    }

    case CREATE_RECIPE_BEGIN: {
      return state;
    }

    case CREATE_RECIPE_FINISHED: {
      return {
        ...state,
        recipe: action.payload,
      };
    }

    case CREATE_RECIPE_ERROR: {
      console.log(
        'Error on creating recipe in SQLite storage ',
        action.payload,
      );
      return state;
    }

    case ADD_RECIPE: {
      return {
        ...state,
        recipe: {
          id: action.payload.id,
          title: action.payload.title,
          steps: action.payload.steps,
          ingredients: action.payload.ingredients,
          imagePath: action.payload.imagePath,
          servings: action.payload.servings,
        },
      };
    }

    case ADD_RECIPE_BEGIN: {
      return state;
    }

    case ADD_RECIPE_FINISHED: {
      return {
        ...state,
        recipe: {
          id: action.payload.id,
          title: action.payload.title,
          steps: action.payload.steps,
          ingredients: action.payload.ingredients,
          imagePath: action.payload.imagePath,
          servings: action.payload.servings,
        },
      };
    }

    case ADD_RECIPE_ERROR: {
      console.log('Error on adding recipe', action.payload);
      return state;
    }

    case REMOVE_RECIPE: {
      return state;
    }

    case REMOVE_RECIPE_BEGIN: {
      return state;
    }

    case REMOVE_RECIPE_FINISHED: {
      return {
        ...state,
        recipe: {},
      };
    }

    case REMOVE_RECIPE_ERROR: {
      console.log('Error on removing recipe', action.payload);
      return state;
    }

    case EDIT_RECIPE: {
      return state;
    }

    case EDIT_RECIPE_BEGIN: {
      return state;
    }

    case EDIT_RECIPE_FINISHED: {
      return {
        ...state,
        recipe: state.recipes.map((item) => {
          if (item.id === action.payload.id) {
            item.title = action.payload.title;
            item.steps = action.payload.steps;
            item.ingredients = action.payload.ingredients;
            item.imagePath = action.payload.imagePath;
            item.servings = action.payload.servings;
          }
          return item;
        }),
      };
    }

    case EDIT_RECIPE_ERROR: {
      console.log('Error on editing recipe', action.payload);
      return state;
    }

    default: {
      return state;
    }
  }
};
