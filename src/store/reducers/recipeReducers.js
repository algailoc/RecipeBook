import {
  ADD_RECIPE_BEGIN,
  ADD_RECIPE_ERROR,
  ADD_RECIPE_FINISHED,
} from '../types/recipeTypes';

const initialState = {
  recipes: [
    {
      id: '1',
      title: 'Блины',
      img: require('../../assets/img/blini.jpg'),
      steps:
        '1. Смешайте яйца, соль, сахар и размешайте миксером. Введите муку и влейте молоко. Взбейте блинное тесто, чтобы добиться однородной консистенции.\n' +
        '2. Следом отправьте в тесто растительное масло, чтобы блины в момент жарки легко переворачивались и не пригорали.\n' +
        '3. Разогрейте сковородку и смажьте маслом. Налейте в центр сковородки небольшую порцию теста. Сразу же вращайте сковородку по кругу, чтобы тесто равномерно распределилось по всей поверхности.\n' +
        '4. Жарим блины на среднем огне с обеих сторон до зарумянивания. Блины очень тонкие, поэтому переворачивайте их аккуратно с помощью лопатки. После того, как блин будет готов, снимите со сковородки и смажьте сливочным маслом, чтобы края не были сухими, а блины получились нежными.',
      ingredients: [
        {name: 'Молоко', amount: '500 мл'},
        {name: 'Яйца', amount: '3 шт'},
        {name: 'Масло растительное', amount: ''},
        {name: 'Мука ', amount: '250 г'},
        {name: 'Сахар ', amount: '1 ст. ложка'},
        {name: 'Соль ', amount: ''},
        {name: 'Масло сливочное', amount: '1 ст. ложка'},
      ],
    },
    {
      id: '2',
      title: 'Лазанья',
      img: require('../../assets/img/lasanja.jpg'),
      steps: 'Steps here',
      ingredients: [
        {name: 'Name of ingredient', amount: 'Amount of ingredient'},
      ],
    },
    {
      id: '3',
      title: 'Паста с песто и сыром',
      img: require('../../assets/img/default_bg.jpg'),
      steps: 'Steps here',
      ingredients: [
        {name: 'Name of ingredient', amount: 'Amount of ingredient'},
      ],
    },
  ],
};

export const recipeReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECIPE_BEGIN: {
      return state;
    }

    case ADD_RECIPE_FINISHED: {
      return {
        ...state,
        recipes: [
          ...state.recipes,
          {
            id: action.payload.id,
            title: action.payload.title,
          },
        ],
      };
    }

    case ADD_RECIPE_ERROR: {
      console.log('Error on adding recipe');
      return state;
    }
    default: {
      return state;
    }
  }
};
