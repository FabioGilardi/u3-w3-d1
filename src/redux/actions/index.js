// ACTION REFERENCES

export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVUORITES = "REMOVE_FROM_FAVUORITES";
export const GET_ALL_COMPANIES = "GET_ALL_COMPANIES";
export const SHOW_SPINNER = "SHOW_SPINNER";
export const HIDE_SPINNER = "HIDE_SPINNER";
export const STOP_LOADING = "STOP_LOADING";
// ACTION CREATORS

// COMPANY REDUCER
export const removeFromFavuorites = (index) => ({
  type: REMOVE_FROM_FAVUORITES,
  payload: index,
});

export const addToFavuorites = (companyName) => ({
  type: ADD_TO_FAVOURITES,
  payload: companyName,
});

// FETCH REDUCER

export const showSpinner = () => ({
  type: SHOW_SPINNER,
  payload: true,
});

export const hideSpinner = () => ({
  type: HIDE_SPINNER,
  payload: false,
});

export const stopLoading = () => ({
  type: STOP_LOADING,
});

export const getAllCompanies = (baseEndpoint, query) => {
  return async (dispatch, getState) => {
    try {
      dispatch(showSpinner());
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: GET_ALL_COMPANIES,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(hideSpinner());
      dispatch(stopLoading());
    }
  };
};
