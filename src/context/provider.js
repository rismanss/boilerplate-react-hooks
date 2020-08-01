import React, { createContext, useReducer, useEffect, useMemo } from 'react';
import rootReducer from './rootReducer';
import {fetchData, isError, load} from './actions/actionNewsfeed';
import api from '../pages/newsfeed/api.json';

export const Context = createContext();

const Provider = props => {
  const initialState = {
    newsfeed: {
      page: 1
    },
    crud: [
      {id: 1, name: 'clara', age: 27, status: false},
      {id: 2, name: 'bams', age: 27, status: true}
    ]
  };

  const [state, dispatch] = useReducer(rootReducer, initialState);

  const store = useMemo(() => [state, dispatch], [state]);

  const getData = async () => {
    dispatch(load(true));
    try {
      const response = await fetch(`${api.url}&page=${state.newsfeed.page}`);
      const result = await response.json();
      dispatch(fetchData(result));
    } catch (error) {
      dispatch(isError(error));
    }
    dispatch(load(false));
  };

  useEffect(() => {
    getData();
  },[state.newsfeed.page]);
  
  console.log(state, '...state dari reducer');
  const {children} = props;
  return (
    <Context.Provider value = {store}>
      {children}
    </Context.Provider>
  );
};

export default Provider;