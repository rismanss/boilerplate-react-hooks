import React from 'react';
import {Button, Table} from '../../components';

const List = props => {
  const {users} = props;
  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.status ? 'Married' : 'Single'}</td>
              <td>
                <Button onClick={() => props.formEdit(user)}>Edit</Button>
                <Button onClick={() => props.deleteUser(user.id)}>Delete</Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td>No users</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default List;