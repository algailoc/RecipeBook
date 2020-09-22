import {
  LOAD_RECIPES_LIST,
  LOAD_RECIPES_LIST_BEGIN,
  LOAD_RECIPES_LIST_ERROR,
  LOAD_RECIPES_LIST_FINISHED,
} from '../types/recipesListTypes';
import {
  ADD_RECIPE_FINISHED,
  CREATE_RECIPE_FINISHED,
  REMOVE_RECIPE_FINISHED,
} from '../types/recipeTypes';

const initialState = {
  recipes: [
    // {
    //   id: '1',
    //   title: 'Блины',
    //   img: require('../../assets/img/blini.jpg'),
    //   steps:
    //     '1. Смешайте яйца, соль, сахар и размешайте миксером. Введите муку и влейте молоко. Взбейте блинное тесто, чтобы добиться однородной консистенции.\n' +
    //     '2. Следом отправьте в тесто растительное масло, чтобы блины в момент жарки легко переворачивались и не пригорали.\n' +
    //     '3. Разогрейте сковородку и смажьте маслом. Налейте в центр сковородки небольшую порцию теста. Сразу же вращайте сковородку по кругу, чтобы тесто равномерно распределилось по всей поверхности.\n' +
    //     '4. Жарим блины на среднем огне с обеих сторон до зарумянивания. Блины очень тонкие, поэтому переворачивайте их аккуратно с помощью лопатки. После того, как блин будет готов, снимите со сковородки и смажьте сливочным маслом, чтобы края не были сухими, а блины получились нежными.',
    //   ingredients: [
    //     {id: '1', name: 'Молоко', amount: '500 мл'},
    //     {id: '2', name: 'Яйца', amount: '3 шт'},
    //     {id: '3', name: 'Масло растительное', amount: ''},
    //     {id: '4', name: 'Мука ', amount: '250 г'},
    //     {id: '5', name: 'Сахар ', amount: '1 ст. ложка'},
    //     {id: '6', name: 'Соль ', amount: ''},
    //     {id: '7', name: 'Масло сливочное', amount: '1 ст. ложка'},
    //   ],
    //   servings: '1',
    // },
    // {
    //   id: '2',
    //   title: 'Лазанья',
    //   img: require('../../assets/img/lasanja.jpg'),
    //   steps: 'Steps here',
    //   ingredients: [
    //     {id: '1', name: 'Name of ingredient', amount: 'Amount of ingredient'},
    //   ],
    //   servings: '2',
    // },
    // {
    //   id: '3',
    //   title: 'Паста с песто и сыром',
    //   img: require('../../assets/img/default_bg.jpg'),
    //   steps: 'Steps here',
    //   ingredients: [
    //     {id: '1', name: 'Name of ingredient', amount: 'Amount of ingredient'},
    //   ],
    //   servings: '3',
    // },
  ],
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
      console.log('Error on getting list of recipes ', action.payload);
      return state;
    }

    case CREATE_RECIPE_FINISHED: {
      return {
        ...state,
        recipes: [...state.recipes, {id: action.payload}],
      };
    }

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

    default: {
      return state;
    }
  }
};
