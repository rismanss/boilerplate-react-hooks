import {ADD, REMOVE, UPDATE} from '../actions/actionCrud';

const crudReducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.data
      ];
    case UPDATE:
      return state.map(user => 
        user.id === action.id ? action.data : user
      );
    case REMOVE:
      return state.filter(user => user.id !== action.id);
    default:
      return state;
  }
};

export default crudReducer;