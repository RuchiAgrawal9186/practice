import React, { useEffect, useState } from 'react'
import "../styles/modal.css"
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  department: "",
};

const UserModal = ({ user, onClose, onSave }) => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (user) {
      setForm(user);
    }
  }, [user]);

  function validate() {
    const err = {};

    if (!form.firstName.trim()) err.firstName = "Required";

    if (!form.lastName.trim()) err.lastName = "Required";

    if (!form.email.trim()) err.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      err.email = "Invalid Email";

    if (!form.department) err.department = "Required";

    setErrors(err);

    return Object.keys(err).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) return;

    onSave(form);
    onClose();
  }
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{user ? "Edit User" : "Add User"}</h2>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="First Name"
            value={form.firstName}
            onChange={(e) =>
              setForm({
                ...form,
                firstName: e.target.value,
              })
            }
          />
          <small>{errors.firstName}</small>

          <input
            placeholder="Last Name"
            value={form.lastName}
            onChange={(e) =>
              setForm({
                ...form,
                lastName: e.target.value,
              })
            }
          />
          <small>{errors.lastName}</small>

          <input
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />
          <small>{errors.email}</small>

          <select
            value={form.department}
            onChange={(e) =>
              setForm({
                ...form,
                department: e.target.value,
              })
            }
          >
            <option value="">Select Department</option>

            <option>IT</option>

            <option>HR</option>

            <option>Finance</option>

            <option>Marketing</option>
          </select>

          <small>{errors.department}</small>

          <div className="actions">
            <button className="save-btn" type="submit">
              Save
            </button>

            <button className="cancel-btn" type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal
