import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getUserById } from "../utils/api";
import Loader from "../Components/Loader";

const UserDetails = () => {
  const { id } = useParams();

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await getUserById(id);

      setUser(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  // if (loading) return <Loader />;
  if (!user) {
    return <Loader />;
  }
  return (
    // <div className="details-page">
    //   <Link to="/">← Back</Link>

    //   <div className="details-card">
    //     <img src={user.image} alt={user.firstName} className="details-image" />

    //     <h2>
    //       {user.firstName} {user.lastName}
    //     </h2>

    //     <div className="details-section">
    //       <h3>Basic Information</h3>

    //       <p>Email: {user.email}</p>
    //       <p>Phone: {user.phone}</p>
    //       <p>Age: {user.age}</p>
    //       <p>Gender: {user.gender}</p>
    //       <p>Role: {user.role}</p>
    //     </div>

    //     <div className="details-section">
    //       <h3>Address Information</h3>

    //       <p>
    //         Address:
    //         {user.address?.address}
    //       </p>

    //       <p>
    //         City:
    //         {user.address?.city}
    //       </p>

    //       <p>
    //         State:
    //         {user.address?.state}
    //       </p>

    //       <p>
    //         Country:
    //         {user.address?.country}
    //       </p>
    //     </div>

    //     <div className="details-section">
    //       <h3>Company Information</h3>

    //       <p>
    //         Company:
    //         {user.company?.name}
    //       </p>

    //       <p>
    //         Department:
    //         {user.company?.department}
    //       </p>

    //       <p>
    //         Title:
    //         {user.company?.title}
    //       </p>
    //     </div>

    //     <div className="details-section">
    //       <h3>Additional Information</h3>

    //       <p>
    //         Birth Date:
    //         {user.birthDate}
    //       </p>

    //       <p>
    //         University:
    //         {user.university}
    //       </p>
    //     </div>
    //   </div>
    // </div>

    <div className="details-page">
      <Link to="/" className="back-btn">
        ← Back
      </Link>

      <div className="details-card">
        <div className="profile-header">
          <img
            src={user.image || "https://dummyjson.com/icon/user/128"}
            alt={user.firstName}
            className="details-image"
          />

          <div>
            <h2>
              {user.firstName} {user.lastName}
            </h2>

            <p className="user-role">{user.role}</p>
          </div>
        </div>

        <div className="details-grid">
          <div className="details-section">
            <h3>Basic Information</h3>

            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Age:</strong> {user.age}
            </p>
            <p>
              <strong>Gender:</strong> {user.gender}
            </p>
          </div>

          <div className="details-section">
            <h3>Address Information</h3>

            <p>
              <strong>Address:</strong>
              {user.address?.address}
            </p>

            <p>
              <strong>City:</strong>
              {user.address?.city}
            </p>

            <p>
              <strong>State:</strong>
              {user.address?.state}
            </p>

            <p>
              <strong>Country:</strong>
              {user.address?.country}
            </p>
          </div>

          <div className="details-section">
            <h3>Company Information</h3>

            <p>
              <strong>Company:</strong>
              {user.company?.name}
            </p>

            <p>
              <strong>Department:</strong>
              {user.company?.department}
            </p>

            <p>
              <strong>Title:</strong>
              {user.company?.title}
            </p>
          </div>

          <div className="details-section">
            <h3>Additional Information</h3>

            <p>
              <strong>Birth Date:</strong>
              {user.birthDate}
            </p>

            <p>
              <strong>University:</strong>
              {user.university}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
