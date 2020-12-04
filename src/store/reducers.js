import * as actionTypes from './actionTypes';

const initialState = {
  data: []
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_VIDEO:
      return {
        ...state,
        data: action.data,
      }
  }
  return state;
};

export default reducers;
