import { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import { auth, storage } from "../firebase";
import "../style/style.scss";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      // Create User
      const res = await createUserWithEmailAndPassword(auth, email, password);
      
      // Create a unique image name
      const date = new Date().getTime()
      const storageRef = ref(storage, `${displayName + date}`);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
            await updateProfile((await res).user, {
              // Update Profile
              displayName,
              photoURL: downloadURL,
            });
          });
        }
      );
    } catch (err) {
      setErr(true);
      setLoading(false)
    }
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
          <input type="file" id="file" style={{ display: "none" }} />
          <label htmlFor="file">
            <img src="/assets/addAvatar.png" alt="AddProfilePhoto" />
            <p>Add A Profile Photo</p>
          </label>
          <button disabled={loading}>Sign Up</button>
          {loading && "Uploading and compressing the image. Please wait..."}
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          You already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
