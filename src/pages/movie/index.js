import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/provider';
import { fetchData, load, page } from '../../context/actions/actionMovie';
import {Button, H1, Text, Field, Table} from '../../components';

const Index = () => {
  const [state, dispatch] = useContext(Context);
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    const {value} = e.target;
    setTitle(value);
    localStorage.removeItem('title');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(load(true));
    localStorage.setItem('title', title);
    fetchData(title, state.movie.page).then(res => {
      dispatch({type: 'DATA', payload: res.payload});
    });
    setTitle('');
  };

  useEffect(() => {
    if(state.movie.Search && state.movie.Search.length >= state.movie.totalResults) {
      dispatch(page(1));
    }
  },[state.movie.Search.length]);

  const nextPage = () => {
    const loadMore = state.movie.page + 1;
    dispatch(page(loadMore));
    fetchData(localStorage.getItem('title'), loadMore).then(res=> {
      dispatch({type: 'DATA', payload: res.payload});
    });
  };

  return (
    <>
      <H1>Search Movie</H1>
      <form onSubmit={handleSubmit}>
        <Field 
          width='100%'
          type='text'
          value={title}
          placeholder='enter title movie for search'
          onChange={handleChange}
        />
        <Button disabled={title === ''}>Search</Button>
      </form>
      {state.movie.isLoad && <Text> Loading...</Text>}
      {state.movie.Response && state.movie.Response !== 'True' && <Text>ups ada error...</Text>}
      <Table>
        <thead>
          <tr>
            <th>Poster</th>
            <th>Title</th>
            <th>Year</th>
            <th>imdbID</th>
          </tr>
        </thead>
        <tbody>
          {state.movie.Search.map(item => (
            <tr key={item.imdbID}>
              <td><img src={item.Poster} alt={item.Title} width='200px' height='150px'/></td>
              <td>{item.Title}</td>
              <td>{item.Year}</td>
              <td>{item.imdbID}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {state.movie.Search && state.movie.Search.length < state.movie.totalResults ? (
        <Button disabled={state.movie.isLoad} onClick={nextPage}>
          Load More
        </Button>
      ) : null}
    </>
  );
};

export default Index;