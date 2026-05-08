import { useEffect, useState } from "react";
import ConfirmModel from "../Components/ConfirmModel";
import Loader from "../Components/Loader";
import UserFormModel from "../Components/UserFormModel";
import UserTable from "../Components/UserTable";
import { getUsers, searchUsers } from "../utils/api";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  const [genderFilter, setGenderFilter] = useState("");

  const [sortName, setSortName] = useState("");

  const [sortAge, setSortAge] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [selectedUser, setSelectedUser] = useState(null);

  const [deleteId, setDeleteId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 10;

  async function fetchUsers() {
    try {
      setLoading(true);

      const response = await getUsers();

      setUsers(response.data.users);
      setFilteredUsers(response.data.users);

      setError("");
    } catch (err) {
      console.log(err);
      setError("Failed to load users");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const refreshUsers = (userData, isEdit) => {
    if (isEdit) {
      const updatedUsers = users.map((user) =>
        user.id === userData.id ? userData : user,
      );

      setUsers(updatedUsers);
      setFilteredUsers(updatedUsers);
    } else {
      const updatedUsers = [userData, ...users];

      setUsers(updatedUsers);
      setFilteredUsers(updatedUsers);
    }
  };

  const handleSearch = async (value) => {
    setSearch(value);

    if (!value) {
      setFilteredUsers(users);
      return;
    }

    try {
      const response = await searchUsers(value);

      setFilteredUsers(response.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGenderFilter = (gender) => {
    setGenderFilter(gender);

    if (!gender) {
      setFilteredUsers(users);
      return;
    }

    const filtered = users.filter((user) => user.gender === gender);

    setFilteredUsers(filtered);
  };

  const handleSortName = (type) => {
    setSortName(type);

    let sorted = [...filteredUsers];

    sorted.sort((a, b) => {
      const nameA = a.firstName + " " + a.lastName;

      const nameB = b.firstName + " " + b.lastName;

      return type === "asc"
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });

    setFilteredUsers(sorted);
  };

  const handleSortAge = (type) => {
    setSortAge(type);

    let sorted = [...filteredUsers];

    sorted.sort((a, b) => (type === "low" ? a.age - b.age : b.age - a.age));

    setFilteredUsers(sorted);
  };

  const handleDelete = () => {
    const updatedUsers = users.filter((user) => user.id !== deleteId);

    setUsers(updatedUsers);

    setFilteredUsers(updatedUsers);

    setDeleteId(null);
  };

  const indexOfLastUser = currentPage * usersPerPage;

  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  return (
    <>
      <div className="container">
        <div className="top-controls">
          <input
            type="text"
            placeholder="Search by name or email"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />

          <select
            value={genderFilter}
            onChange={(e) => handleGenderFilter(e.target.value)}
          >
            <option value="">All Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <select
            value={sortName}
            onChange={(e) => handleSortName(e.target.value)}
          >
            <option value="">Sort Name</option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>

          <select
            value={sortAge}
            onChange={(e) => handleSortAge(e.target.value)}
          >
            <option value="">Sort Age</option>
            <option value="low">Low-High</option>
            <option value="high">High-Low</option>
          </select>

          <button className="add-btn" onClick={() => setShowModal(true)}>
            + Add User
          </button>
        </div>

        {loading ? (
          <Loader />
        ) : error ? (
          <h3>{error}</h3>
        ) : (
          <>
            <UserTable
              users={currentUsers}
              openEditModal={(user) => {
                setSelectedUser(user);
                setShowModal(true);
              }}
              openDeleteModal={(id) => setDeleteId(id)}
            />
            <div className="pagination">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
              >
                Prev
              </button>

              <span>
                Page {currentPage} of {totalPages}
              </span>

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>

      {showModal && (
        <UserFormModel
          selectedUser={selectedUser}
          closeModal={() => {
            setShowModal(false);
            setSelectedUser(null);
          }}
          refreshUsers={refreshUsers}
        />
      )}

      {deleteId && (
        <ConfirmModel
          onConfirm={handleDelete}
          onCancel={() => setDeleteId(null)}
        />
      )}
    </>
  );
};

export default UsersList;
