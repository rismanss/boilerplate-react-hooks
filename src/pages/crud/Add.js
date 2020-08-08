import React, { useState, useEffect } from 'react';
import {CustomAlert, Button} from '../../components';

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
      <div className="form-row">
        <div>
          <label>Name</label>
          <input type="text" name="name" value={user.name} onChange={handleInput} />
        </div>
        <div>
          <label>Age</label>
          <input type="number" name="age" value={user.age} onChange={handleInput} />
        </div>
      </div>
      <div>
        <input type="checkbox" name="status" checked={user.status} onChange={handleInput} />
        <label> Status </label>
      </div>
      <div>
        <Button>Save</Button>
      </div>
    </form>
  );
};

export default Add;