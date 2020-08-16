import crudReducer from './reducers/crudReducer';
import movieReducer from './reducers/movieReducer';

// function for combine reducer
const combineReducers = (slices) => (state, action) =>
  Object.keys(slices).reduce(
    (acc, prop) => ({
      ...acc,
      [prop]: slices[prop](acc[prop], action),
    }),
    state
  );

const rootReducer = combineReducers({crud: crudReducer, movie: movieReducer});

export default rootReducer;