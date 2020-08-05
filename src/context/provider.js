import React, { createContext, useReducer, useMemo } from 'react';
import rootReducer from './rootReducer';

export const Context = createContext();

const Provider = props => {
  const initialState = {
    newsfeed: {
      page: 1,
      articles: [],
      totalResults: 0
    },
    crud: [
      {id: 1, name: 'clara', age: 27, status: false},
      {id: 2, name: 'bams', age: 27, status: true}
    ]
  };

  const [state, dispatch] = useReducer(rootReducer, initialState);
  const store = useMemo(() => [state, dispatch], [state]);

  const {children} = props;
  
  return (
    <Context.Provider value = {store}>
      {children}
    </Context.Provider>
  );
};

export default Provider;