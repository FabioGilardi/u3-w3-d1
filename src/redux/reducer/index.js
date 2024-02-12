const initialState = {
  company: {
    favourites: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        company: {
          ...state.company,
          favourites: [...state.company.favourites, action.payload],
        },
      };

    case "REMOVE_FROM_FAVUORITES":
      return {
        ...state,
        company: {
          ...state.company,
          favourites: state.company.favourites.filter((name, i) => {
            return i !== action.payload;
          }),
        },
      };

    default:
      return state;
  }
};
export default mainReducer;
