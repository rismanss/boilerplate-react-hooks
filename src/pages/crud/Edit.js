import React, { useState, useEffect } from 'react';
import {Button, CustomAlert, Field} from '../../components';

const Edit = props => {
  const {init, updateUser, setInit, initUser, handleInput, setEdit} = props;
  const [ user, setUser ] = useState(init);
  const [ valid, setValid ] = useState(true);

  useEffect(() => {
    setUser(init);
  },[ props ]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!user.name || !user.age) return setValid(false);
    updateUser(user.id, user);
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
        <Button>Update</Button>
        <Button onClick={() => {setEdit(false); setInit(initUser);}}>Cancel</Button>
      </div>
    </form>
  );
};

export default Edit;