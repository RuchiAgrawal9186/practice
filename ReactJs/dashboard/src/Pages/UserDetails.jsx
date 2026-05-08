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

  if (loading) return <Loader />;
  return (
    <div className="details-page">
      <Link to="/">← Back</Link>

      <div className="details-card">
        <img src={user.image} alt={user.firstName} className="details-image" />

        <h2>
          {user.firstName} {user.lastName}
        </h2>

        <div className="details-section">
          <h3>Basic Information</h3>

          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Age: {user.age}</p>
          <p>Gender: {user.gender}</p>
          <p>Role: {user.role}</p>
        </div>

        <div className="details-section">
          <h3>Address Information</h3>

          <p>
            Address:
            {user.address?.address}
          </p>

          <p>
            City:
            {user.address?.city}
          </p>

          <p>
            State:
            {user.address?.state}
          </p>

          <p>
            Country:
            {user.address?.country}
          </p>
        </div>

        <div className="details-section">
          <h3>Company Information</h3>

          <p>
            Company:
            {user.company?.name}
          </p>

          <p>
            Department:
            {user.company?.department}
          </p>

          <p>
            Title:
            {user.company?.title}
          </p>
        </div>

        <div className="details-section">
          <h3>Additional Information</h3>

          <p>
            Birth Date:
            {user.birthDate}
          </p>

          <p>
            University:
            {user.university}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
