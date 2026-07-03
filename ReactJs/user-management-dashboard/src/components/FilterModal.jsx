import React, { useState } from 'react'

const filterModal = ({ users, setDisplayUsers, close }) => {
    const [filters, setFilters] =
    useState({
      firstName: "",
      lastName: "",
      email: "",
      department: "",
    });

    function applyFilter() {
        const result =
            users.filter((u) => {
                return (
                    (!filters.firstName ||
                        u.firstName
                            .toLowerCase()
                            .includes(
                                filters.firstName.toLowerCase()
                            )) &&
                    (!filters.lastName ||
                        u.lastName
                            .toLowerCase()
                            .includes(
                                filters.lastName.toLowerCase()
                            )) &&
                    (!filters.email ||
                        u.email
                            .toLowerCase()
                            .includes(
                                filters.email.toLowerCase()
                            )) &&
                    (!filters.department ||
                        u.department ===
                        filters.department)
                );
            });

        setDisplayUsers(result);
        close();
    }
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Filters</h2>

        <input
          placeholder="First Name"
          onChange={(e) =>
            setFilters({
              ...filters,
              firstName: e.target.value,
            })
          }
        />

        <input
          placeholder="Last Name"
          onChange={(e) =>
            setFilters({
              ...filters,
              lastName: e.target.value,
            })
          }
        />

        <input
          placeholder="Email"
          onChange={(e) =>
            setFilters({
              ...filters,
              email: e.target.value,
            })
          }
        />

        <select
          onChange={(e) =>
            setFilters({
              ...filters,
              department: e.target.value,
            })
          }
        >
          <option value="">All</option>

          <option>IT</option>

          <option>HR</option>

          <option>Finance</option>

          <option>Marketing</option>
        </select>

        <button onClick={applyFilter}>Apply</button>
      </div>
    </div>
  );
};

export default filterModal
