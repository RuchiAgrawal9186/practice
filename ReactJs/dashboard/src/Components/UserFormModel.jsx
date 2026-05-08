import { useState } from "react";
// import { addUser, updateUser } from "../utils/api";
// import { v4 as uuidv4 } from 'uuid';


const UserFormModel = ({ selectedUser, closeModal, refreshUsers }) => {
  
    const [formData, setFormData] = useState({
      firstName: selectedUser?.firstName || "",
      lastName: selectedUser?.lastName || "",
      email: selectedUser?.email || "",
      phone: selectedUser?.phone || "",
      age: selectedUser?.age || "",
      gender: selectedUser?.gender || "",
      role: selectedUser?.role || "",
      image: selectedUser?.image || "",
      address: selectedUser?.address?.address || "",
      city: selectedUser?.address?.city || "",
      state: selectedUser?.address?.state || "",
      country: selectedUser?.address?.country || "",
      companyName: selectedUser?.company?.name || "",
      department: selectedUser?.company?.department || "",
      title: selectedUser?.company?.title || "",
    });

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    // const handleSubmit = async (e) => {
    //   e.preventDefault();

    //   if (!formData.firstName || !formData.lastName || !formData.email) {
    //     alert("Please fill required fields");
    //     return;
    //   }

    //   const payload = {
    //     id:selectedUser ? selectedUser.id : Date.now(),
    //     firstName: formData.firstName,
    //     lastName: formData.lastName,
    //     email: formData.email,
    //     phone: formData.phone,
    //     age: formData.age,
    //     gender: formData.gender,
    //     role: formData.role,
    //     image: formData.image || null,

    //     address: {
    //       address: formData.address,
    //       city: formData.city,
    //       state: formData.state,
    //       country: formData.country,
    //     },

    //     company: {
    //       name: formData.companyName,
    //       department: formData.department,
    //       title: formData.title,
    //     },
    //   };

    //   try {
    //     if (selectedUser) {
    //       await updateUser(selectedUser.id, payload);
    //     } else {
    //         //   await addUser(payload);
    //         const response = await addUser(payload);

    //         refreshUsers(response.data);
    //     }

    //       // refreshUsers();
    //     closeModal();
    //   } catch (error) {
    //       console.log(error)
    //     alert("Something went wrong");
    //   }
    // };
  
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert("Please fill required fields");
      return;
    }

    const payload = {
      id: selectedUser ? selectedUser.id : Date.now(),

      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      age: formData.age,
      gender: formData.gender,
      role: formData.role,
      image: formData.image || "https://dummyjson.com/icon/user/128",

      address: {
        address: formData.address,
        city: formData.city,
        state: formData.state,
        country: formData.country,
      },

      company: {
        name: formData.companyName,
        department: formData.department,
        title: formData.title,
      },
    };

    refreshUsers(payload, !!selectedUser);

    closeModal();
  };
  return (
    <div className="modal-overlay">
      <div className="modal large-modal">
        <h2>{selectedUser ? "Edit User" : "Add User"}</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />

            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
            />

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option>male</option>
              <option>female</option>
            </select>

            <input
              type="text"
              name="role"
              placeholder="Role"
              value={formData.role}
              onChange={handleChange}
            />

            <input
              type="text"
              name="image"
              placeholder="Profile Image URL"
              value={formData.image}
              onChange={handleChange}
            />

            <input
              type="text"
              name="address"
              placeholder="Address Line"
              value={formData.address}
              onChange={handleChange}
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />

            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
            />

            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
            />

            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
            />

            <input
              type="text"
              name="department"
              placeholder="Department"
              value={formData.department}
              onChange={handleChange}
            />

            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div className="modal-buttons">
            <button type="submit" className="save-btn">
              Save User
            </button>

            <button type="button" className="cancel-btn" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserFormModel
