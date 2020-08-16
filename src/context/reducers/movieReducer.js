import {DATA, PAGE, LOAD} from '../actions/actionMovie';

const movieReducer = (state, action) => {
  switch (action.type) {
    case DATA:
      return {
        ...state,
        ...action.payload,
        Search: state.page === 1 ? [...action.payload.Search] : [...state.Search, ...action.payload.Search],
        isLoad: false,
      };
    case PAGE:
      return {
        ...state,
        page: action.isPage
      };
    case LOAD:
      return {
        ...state,
        isLoad: action.isLoad
      };
    default:
      return state;
  }
};

export default movieReducer;