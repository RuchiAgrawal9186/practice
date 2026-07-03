import React from 'react'

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [displayUsers, setDisplayUsers] = useState([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [showModal, setShowModal] = useState(false);

    const [selectedUser, setSelectedUser] = useState(null);

    const [search, setSearch] = useState("");

    const [page, setPage] = useState(1);

    const [limit, setLimit] = useState(10);

    useEffect(() => {
      fetchUsers();
    }, []);

    async function fetchUsers() {
      try {
        setLoading(true);

        const res = await getUsers();

        const formatted = res.data.map((user, index) => ({
          id: user.id,
          firstName: user.name.split(" ")[0],
          lastName: user.name.split(" ")[1] || "",
          email: user.email,
          department: ["IT", "HR", "Finance", "Marketing"][index % 4],
        }));

        setUsers(formatted);
        setDisplayUsers(formatted);
      } catch {
        setError("Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    }

    function handleSearch(value) {
      setSearch(value);

      const filtered = users.filter((user) =>
        Object.values(user)
          .join(" ")
          .toLowerCase()
          .includes(value.toLowerCase()),
      );

      setDisplayUsers(filtered);
      setPage(1);
    }

    async function handleAdd(user) {
      await addUser(user);

      const newUser = {
        ...user,
        id: Date.now(),
      };

      const updated = [...users, newUser];

      setUsers(updated);
      setDisplayUsers(updated);
    }

    async function handleUpdate(user) {
      await updateUser(user.id, user);

      const updated = users.map((u) => (u.id === user.id ? user : u));

      setUsers(updated);
      setDisplayUsers(updated);
    }

    async function handleDelete(id) {
      const confirmDelete = window.confirm("Delete this user?");

      if (!confirmDelete) return;

      await deleteUser(id);

      const updated = users.filter((u) => u.id !== id);

      setUsers(updated);
      setDisplayUsers(updated);
    }

    const start = (page - 1) * limit;

    const paginated = displayUsers.slice(start, start + limit);

  return (
    <div className="dashboard">
      <Header
        search={search}
        setSearch={handleSearch}
        openModal={() => {
          setSelectedUser(null);

          setShowModal(true);
        }}
      />

      {loading && <Loader />}

      {error && <h3>{error}</h3>}

      {!loading && (
        <>
          <UserTable
            users={paginated}
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

      {showModal && (
        <UserModal
          user={selectedUser}
          onClose={() => setShowModal(false)}
          onSave={selectedUser ? handleUpdate : handleAdd}
        />
      )}
    </div>
  );
}

export default Dashboard
