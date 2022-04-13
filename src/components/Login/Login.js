import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import auth from "../../firebase.init";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();


  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleSignInUser = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

 
  const from = location?.state?.from?.pathname || "/";
  if (user) {
    navigate(from , {replace:true});
  }
  return (
    <div>
      <div className="form-container">
        <div className="">
          <h3 className="form-title">Login</h3>
          <form action="" onSubmit={handleSignInUser}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                onBlur={handleEmailBlur}
                type="email"
                name="email"
                id=""
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                onBlur={handlePasswordBlur}
                type="password"
                name="password"
                id=""
                required
              />
            </div>
            <p style={{ color: "red" }}>{error?.message}</p>
            {loading && <p>loading....</p>}
            <input className="form-submit" type="submit" value="Login" />
          </form>
          <p className="">
            New to Ema Jhon?
            <Link className="form-link" to="/signup">
              Create new account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
