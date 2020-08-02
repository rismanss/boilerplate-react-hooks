import React, { useContext, useEffect } from 'react';
import { Context } from '../../context/provider';
import { fetchData, isError, load, page } from '../../context/actions/actionNewsfeed';
import api from './api.json';

const Index = () => {
  const [state, dispatch] = useContext(Context);
  console.log(state,'...state newsfeed');

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

  return (
    <div className="container">
      <h1>News Feed</h1>
      {state.newsfeed.isLoad && <p> Loading...</p>}
      {state.newsfeed.status !== 'ok' && state.newsfeed.message}
      <div>
        {state.newsfeed.articles && state.newsfeed.articles.map((item, i) => (
          <li key={i.toString()}>
            <a href={item.url} target="blank">{item.title}</a>
            <p>{item.content}</p>
          </li>
        ))}
      </div>
      {state.newsfeed.articles && state.newsfeed.articles.length < state.newsfeed.totalResults ? (
        <button disabled={state.newsfeed.isLoad} onClick={() => dispatch(page(state.newsfeed.page + 1))}>
          Load More
        </button>
      ) : null}
    </div>
  );
};

export default Index;