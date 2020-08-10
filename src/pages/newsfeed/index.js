import React, { useContext, useEffect } from 'react';
import { Context } from '../../context/provider';
import { fetchData, load, page } from '../../context/actions/actionNewsfeed';
import {Button, H1, Card, Link, H2, Text} from '../../components';

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
      {state.newsfeed.articles && state.newsfeed.articles.map((item, i) => (
        <Card key={i.toString()}>
          <Link href={item.url} target="blank">
            <H2>{item.title}</H2>
          </Link>
          <Text>{item.content}</Text>
        </Card>
      ))}
      {state.newsfeed.articles && state.newsfeed.articles.length < state.newsfeed.totalResults ? (
        <Button disabled={state.newsfeed.isLoad} onClick={() => dispatch(page(state.newsfeed.page + 1))}>
          Load More
        </Button>
      ) : null}
    </>
  );
};

export default Index;