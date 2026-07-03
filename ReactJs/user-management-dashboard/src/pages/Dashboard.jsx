import React, { useEffect, useState } from "react";
import { addUser, deleteUser, getUsers, updateUser } from "../api/userApi";
import Header from "../components/Header";
import UserTable from "../components/UserTable";
import Loder from "../components/Loder";
import Pagination from "../components/Pagination";
import UserModal from "../components/UserModal";
import EmptyState from "../components/EmptyState";
import FilterModal from "../components/FilterModal";
import "../styles/dashboard.css"

const Dashboard = () => {
 const [users, setUsers] = useState([]);
 const [displayUsers, setDisplayUsers] = useState([]);

 const [loading, setLoading] = useState(false);
 const [error, setError] = useState("");

 const [search, setSearch] = useState("");
 const [sort, setSort] = useState("");

 const [page, setPage] = useState(1);
 const [limit, setLimit] = useState(10);

 const [selectedUser, setSelectedUser] = useState(null);

 const [showModal, setShowModal] = useState(false);
 const [showFilter, setShowFilter] = useState(false);

 useEffect(() => {
   fetchUsers();
 }, []);

 async function fetchUsers() {
   try {
     setLoading(true);

     const response = await getUsers();

     const formattedUsers = response.data.map((user, index) => ({
       id: user.id,
       firstName: user.name.split(" ")[0],
       lastName: user.name.split(" ")[1] || "",
       email: user.email,
       department: ["IT", "HR", "Finance", "Marketing"][index % 4],
     }));

     setUsers(formattedUsers);
     setDisplayUsers(formattedUsers);
   } catch (err) {
     setError("Failed to fetch users");
   } finally {
     setLoading(false);
   }
 }

 // SEARCH
 function handleSearch(value) {
   setSearch(value);

   const filtered = users.filter((user) =>
     `${user.firstName} ${user.lastName} ${user.email} ${user.department}`
       .toLowerCase()
       .includes(value.toLowerCase()),
   );

   setDisplayUsers(filtered);
   setPage(1);
 }

 // SORT
 function handleSort(type) {
   setSort(type);

   if (!type) return;

   const sorted = [...displayUsers];

   sorted.sort((a, b) => a[type].localeCompare(b[type]));

   setDisplayUsers(sorted);
 }

 // ADD
 async function handleAdd(user) {
   try {
     await addUser(user);

     const newUser = {
       ...user,
       id: Date.now(),
     };

     const updated = [...users, newUser];

     setUsers(updated);
     setDisplayUsers(updated);
   } catch {
     alert("Unable to add user");
   }
 }

 // UPDATE
 async function handleUpdate(user) {
   try {
     await updateUser(user.id, user);

     const updated = users.map((u) => (u.id === user.id ? user : u));

     setUsers(updated);
     setDisplayUsers(updated);
   } catch {
     alert("Unable to update user");
   }
 }

 // DELETE
 async function handleDelete(id) {
   const confirmDelete = window.confirm(
     "Are you sure you want to delete this user?",
   );

   if (!confirmDelete) return;

   try {
     await deleteUser(id);

     const updated = users.filter((u) => u.id !== id);

     setUsers(updated);
     setDisplayUsers(updated);
   } catch {
     alert("Unable to delete user");
   }
 }

 const start = (page - 1) * limit;
 const paginatedUsers = displayUsers.slice(start, start + limit);

  return (
    <div className="dashboard">
      <Header
        search={search}
        handleSearch={handleSearch}
        handleSort={handleSort}
        openAdd={() => {
          setSelectedUser(null);
          setShowModal(true);
        }}
        openFilter={() => setShowFilter(true)}
      />

      {/* Stats Cards */}
      <div className="stats">
        <div className="card">
          <h3>Total Users</h3>
          <p>{users.length}</p>
        </div>

        <div className="card">
          <h3>Departments</h3>
          <p>4</p>
        </div>

        <div className="card">
          <h3>Showing</h3>
          <p>{paginatedUsers.length}</p>
        </div>
      </div>

      {loading && <Loder />}

      {error && <div className="error">{error}</div>}

      {!loading && displayUsers.length === 0 && <EmptyState />}

      {!loading && displayUsers.length > 0 && (
        <>
          <UserTable
            users={paginatedUsers}
            onEdit={(user) => {
              setSelectedUser(user);
              setShowModal(true);
            }}
            onDelete={handleDelete}
          />

          <Pagination
            total={displayUsers.length}
            page={page}
            setPage={setPage}
            limit={limit}
            setLimit={setLimit}
          />
        </>
      )}

      {/* ADD / EDIT */}
      {showModal && (
        <UserModal
          user={selectedUser}
          onClose={() => setShowModal(false)}
          onSave={selectedUser ? handleUpdate : handleAdd}
        />
      )}

      {/* FILTER */}
      {showFilter && (
        <FilterModal
          users={users}
          setDisplayUsers={setDisplayUsers}
          close={() => setShowFilter(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
