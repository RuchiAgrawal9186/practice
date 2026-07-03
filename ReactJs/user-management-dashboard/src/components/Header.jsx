import React from 'react'

const Header = ({ search, setSearch, openModal }) => {
  return (
    <div className="header">
      <h1>User Management</h1>

      <div>
        <input
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={openModal}>Add User</button>
      </div>
    </div>
  );
};

export default Header
