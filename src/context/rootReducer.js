import crudReducer from './reducers/crudReducer';
import newsfeedReducer from './reducers/newsfeedReducer';

// function for combine reducer
const combineReducers = (slices) => (state, action) =>
  Object.keys(slices).reduce(
    (acc, prop) => ({
      ...acc,
      [prop]: slices[prop](acc[prop], action),
    }),
    state
  );

const rootReducer = combineReducers({crud: crudReducer, newsfeed: newsfeedReducer});

export default rootReducer;