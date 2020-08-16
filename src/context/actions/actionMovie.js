import api from '../../pages/movie/api.json';

export const DATA = 'DATA';
export const PAGE = 'PAGE';
export const LOAD = 'LOAD';

export const fetchData = async (title, numberPage) => {
  try {
    const response = await fetch(`${api.url}&s=${title}&page=${numberPage}`);
    const result = await response.json();
    return {
      type: DATA,
      payload: result
    };
  } catch (err) {
    return {
      type: DATA,
      payload: err
    };
  }
};

export const page = (isPage) => {
  return {
    type: PAGE,
    isPage
  };
};

export const load = (isLoad) => {
  return {
    type: LOAD,
    isLoad
  };
};