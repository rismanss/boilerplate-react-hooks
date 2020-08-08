import React, { useState, useEffect } from 'react';
import {Button, CustomAlert} from '../../components';

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
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Name</label>
          <input 
            className="form-control" type="text" name="name" value={user.name} onChange={handleInput}/>
        </div>
        <div className="form-group col-md-6">
          <label>Age</label>
          <input className="form-control" type="number" name="age" value={user.age} onChange={handleInput}/>
        </div>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" name="status" checked={user.status} onChange={handleInput}/>
        <label className="form-check-label"> Status </label>
      </div>
      <div className="text-center">
        <Button>Update</Button>
        <Button onClick={() => {setEdit(false); setInit(initUser);}}>Cancel</Button>
      </div>
    </form>
  );
};

export default Edit;