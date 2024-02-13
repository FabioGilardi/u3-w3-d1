import {
  GET_ALL_COMPANIES,
  HIDE_SPINNER,
  SHOW_SPINNER,
  STOP_LOADING,
} from "../actions";

const initialState = {
  available: [],
  isLoading: true,
  isSpinner: false,
};

const fetch = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COMPANIES: {
      return {
        ...state,
        available: action.payload,
      };
    }

    case SHOW_SPINNER: {
      return {
        ...state,
        isSpinner: action.payload,
      };
    }

    case HIDE_SPINNER: {
      return {
        ...state,
        isSpinner: action.payload,
      };
    }

    case STOP_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
    }

    default: {
      return state;
    }
  }
};

export default fetch;
