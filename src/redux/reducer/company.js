import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVUORITES } from "../actions";

const initialState = {
  favourites: [],
};

const company = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };

    case REMOVE_FROM_FAVUORITES:
      return {
        ...state,
        favourites: state.favourites.filter((name, i) => {
          return i !== action.payload;
        }),
      };

    default:
      return state;
  }
};
export default company;
