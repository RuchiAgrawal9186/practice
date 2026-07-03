import React from 'react'
import "../styles/header.css"

const Header = ({
  search,
  handleSearch,
  handleSort,
  openAdd,
  openFilter, }) => {
  return (
    <header className="header">
      <div className="header-left">
        <h1>User Management Dashboard</h1>
      </div>

      <div className="header-right">
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />

        <select onChange={(e) => handleSort(e.target.value)}>
          <option value="">Sort By</option>

          <option value="firstName">First Name</option>

          <option value="lastName">Last Name</option>

          <option value="department">Department</option>
        </select>

        <button className="filter-btn" onClick={openFilter}>
          Filters
        </button>

        <button className="add-btn" onClick={openAdd}>
          Add User
        </button>
      </div>
    </header>
  );
};

export default Header
