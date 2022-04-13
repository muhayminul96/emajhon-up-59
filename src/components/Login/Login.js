import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <div className="form-container">
        <div className="">
          <h3 className="form-title">Login</h3>
          <form action="">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="" required />
            </div>
            <input className="form-submit" type="submit" value="Login" />
          </form>
          <p className="">
            New to Ema Jhon?{" "}
            <Link className="form-link" to="/signup">
              {" "}
              Create new account{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
