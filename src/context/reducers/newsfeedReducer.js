import {DATA, ERROR, PAGE, LOAD} from '../actions/actionNewsfeed';

const newsfeedReducer = (state, action) => {
  switch (action.type) {
    case DATA:
      if (state.articles) {
        return {
          ...state,
          articles: [...state.articles, ...action.payload.articles]
        };
      }
      return {...action.payload, ...state};
    case ERROR:
      return {
        ...action.payload
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

export default newsfeedReducer;