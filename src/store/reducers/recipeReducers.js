import {
  ADD_INGREDIENT_BEGIN,
  ADD_INGREDIENT_ERROR,
  ADD_INGREDIENT_FINISHED,
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
  loading: false,
  recipe: undefined,
};

export const recipeReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPE_BEGIN: {
      return {...state, recipe: undefined, loading: true};
    }

    case GET_RECIPE_FINISHED: {
      return {
        ...state,
        recipe: action.payload,
        loading: false,
      };
    }

    case GET_RECIPE_ERROR: {
      console.log('Error on getting recipe:', action.payload);
      return {...state, loading: false};
    }

    case CREATE_RECIPE: {
      return state;
    }

    case CREATE_RECIPE_BEGIN: {
      return {
        ...state,
        recipe: {},
        loading: true,
      };
    }

    case CREATE_RECIPE_FINISHED: {
      return {
        ...state,
        recipe: action.payload,
        loading: false,
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
        recipe: undefined,
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
        recipe: {
          title: action.payload.title,
          steps: action.payload.steps,
          ingredients: action.payload.ingredients,
          imagePath: action.payload.imagePath,
          servings: action.payload.servings,
        },
      };
    }

    case EDIT_RECIPE_ERROR: {
      console.log('Error on editing recipe', action.payload);
      return state;
    }

    case ADD_INGREDIENT_BEGIN: {
      return state;
    }

    case ADD_INGREDIENT_FINISHED: {
      return state;
    }

    case ADD_INGREDIENT_ERROR: {
      console.log('Error on adding ingredient:', action.payload);
      return state;
    }

    default: {
      return state;
    }
  }
};
