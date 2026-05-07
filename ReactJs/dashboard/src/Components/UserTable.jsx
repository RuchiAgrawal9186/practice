import { useNavigate } from "react-router-dom";


const UserTable = ({ users, openEditModal, openDeleteModal }) => {
  const navigate = useNavigate();
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <img src={user.image} alt={user.firstName} className="avatar" />
              </td>

              <td>
                {user.firstName} {user.lastName}
              </td>

              <td>{user.email}</td>

              <td>{user.phone}</td>

              <td>{user.company?.name}</td>

              <td>{user.role}</td>

              <td>
                <button
                  className="view-btn"
                  onClick={() => navigate(`/user/${user.id}`)}
                >
                  View
                </button>

                <button
                  className="edit-btn"
                  onClick={() => openEditModal(user)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => openDeleteModal(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable
