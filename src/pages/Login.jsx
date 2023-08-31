import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "../style/style.scss";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
  };

  return (
    <div className="register-login">
      <div className="register-login_form">
        <h1>Chat Nest</h1>
        <h3>Log In</h3>
        <form onSubmit={handleSubmit}>
          <input required type="email" placeholder="Email" />
          <input required type="password" placeholder="Password" />
          <input required type="file" id="file" style={{ display: "none" }} />
          <button>Log In</button>
        </form>
        <p>
          You don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
