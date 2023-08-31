import { useState } from "react";
import { Link } from "react-router-dom";

import "../style/style.scss";

const Register = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
  };

  return (
    <div className="register-login">
      <div className="register-login_form">
        <h1>Chat Nest</h1>
        <h3>Register</h3>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="Display Name" />
          <input required type="email" placeholder="Email" />
          <input required type="password" placeholder="Password" />
          <input required type="file" id="file" style={{ display: "none" }} />
          <label htmlFor="file">
            <img src="/assets/addAvatar.png" alt="AddProfilePhoto" />
            <p>Add A Profile Photo</p>
          </label>
          <button disabled={loading}>Sign Up</button>
          {loading && "Uploading and compressing the image. Please wait..."}
        </form>
        <p>
          You already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
