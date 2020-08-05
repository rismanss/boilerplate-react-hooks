import {DATA, PAGE, LOAD} from '../actions/actionNewsfeed';

const newsfeedReducer = (state, action) => {
  switch (action.type) {
    case DATA:
      if(state.status === 'ok') {
        return {
          ...state,
          ...action.payload,
          articles: [...state.articles, ...action.payload.articles],
          isLoad: false,
        };
      } 
        return {
          ...state,
          ...action.payload,
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

export default newsfeedReducer;