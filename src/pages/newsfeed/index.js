import React, { useContext, useEffect } from 'react';
import { Context } from '../../context/provider';
import { fetchData, load, page } from '../../context/actions/actionNewsfeed';
import {Button, H1} from '../../components';

const Index = () => {
  const [state, dispatch] = useContext(Context);

  const getData = () => {
    dispatch(load(true));
    fetchData(state.newsfeed.page).then(res => {
      dispatch({type: "DATA", payload: res.payload});
    });
  };

  useEffect(() => {
    if(state.newsfeed.articles && state.newsfeed.articles.length === 0) {
      getData();
    } else if (state.newsfeed.page === 2 && state.newsfeed.articles.length < state.newsfeed.totalResults) {
      getData();
    }
  },[state.newsfeed.page]);

  return (
    <>
      <H1>News Feed</H1>
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
        <Button disabled={state.newsfeed.isLoad} onClick={() => dispatch(page(state.newsfeed.page + 1))}>
          Load More
        </Button>
      ) : null}
    </>
  );
};

export default Index;