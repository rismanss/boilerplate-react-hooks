import React, { useContext } from 'react';
import { Context } from '../../context/provider';
import { page } from '../../context/actions/actionNewsfeed';

const Index = () => {
  const [state, dispatch] = useContext(Context);
  console.log(state,'...state newsfeed');

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