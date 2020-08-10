import React, { useState, useEffect } from 'react';
import {CustomAlert, Button, Field} from '../../components';

const Add = props => {
  const {init, addUser, setInit, initUser, handleInput} = props;
  const [ user, setUser ] = useState(init);
  const [ valid, setValid ] = useState(true);
  
  useEffect(() => {
    setUser(init);
  },[ props ]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!user.name || !user.age) return setValid(false);
    addUser(user);
    return setInit(initUser);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {!valid && <CustomAlert onClick={() => setValid(true)} hidden={valid} message='name or age data is empty!'/>}
      <Field
        placeholder='name...'
        label='Name'
        width='50%'
        type='text'
        name='name'
        value={user.name}
        onChange={handleInput} 
      />
      <Field
        placeholder='age...'
        label='Age'
        width='50%'
        type='number'
        name='age'
        value={user.age}
        onChange={handleInput} 
      />
      <Field
        labelCheck='Married ?'
        width='100%'
        type='checkbox'
        name='status'
        checked={user.status}
        onChange={handleInput} 
      />
      <div>
        <Button>Save</Button>
      </div>
    </form>
  );
};

export default Add;