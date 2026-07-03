import React from 'react'
import "../styles/table.css"

const userTable = ({ users, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First</th>
          <th>Last</th>
          <th>Email</th>
          <th>Department</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>

            <td>{user.firstName}</td>

            <td>{user.lastName}</td>

            <td>{user.email}</td>

            <td>{user.department}</td>

            <td>
              <button onClick={() => onEdit(user)}>Edit</button>

              <button onClick={() => onDelete(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default userTable
