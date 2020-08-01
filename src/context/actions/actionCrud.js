export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const UPDATE = 'UPDATE';

export const add = (data) => {
  return {
    type: ADD,
    data
  };
};

export const update = (id, data) => {
  return {
    type: UPDATE,
    id,
    data
  };
};

export const remove = (id) => {
  return {
    type: REMOVE,
    id
  };
};