import React, { useState, useEffect } from 'react';

const Edit = props => {
  const {init, updateUser, setInit, initUser, handleInput, setEdit} = props;
  const [ user, setUser ] = useState(init);

  useEffect(() => {
    setUser(init);
  },[ props ]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!user.name || !user.age) return alert('name or age data is empty!');
    updateUser(user.id, user);
    return setInit(initUser);
  };
  return (
    <form onSubmit={handleSubmit}>
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
        <button className="btn btn-sm btn-primary col-md-5">Update</button>
        <button 
          className="btn btn-sm btn-secondary col-md-5"
          onClick={() => {setEdit(false); setInit(initUser);}}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Edit;