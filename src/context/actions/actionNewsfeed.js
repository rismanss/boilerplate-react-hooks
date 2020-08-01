export const DATA = 'DATA';
export const PAGE = 'PAGE';
export const LOAD = 'LOAD';
export const ERROR = 'ERROR';

export const fetchData = (data) => {
  return {
    type: DATA,
    payload: data
  };
};

export function isError(error) {
  return {
    type: ERROR,
    error
  };
};

export function page(isPage) {
  return {
    type: PAGE,
    isPage
  };
};

export function load(isLoad) {
  return {
    type: LOAD,
    isLoad
  };
};