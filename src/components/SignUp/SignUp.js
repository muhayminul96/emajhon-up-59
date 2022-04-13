import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error , setError] = useState('')

  const 

  const handleEmailBlur = (event) => {
    setEmail(event.target.value)
  }
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value)
  }
  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value)
  }

  const handleCreateUser = (event) => {
    event.preventDefault();
    if(password != confirmPassword){
      setError('passwod dis not match')
    }
  }

  return(
  <div>
    <div className="form-container">
      <div className="">
        <h3 className="form-title">Sign Up</h3>
        <form action onSubmit={handleCreateUser}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" id=""  required/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" required/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Confirm Password</label>
            <input onBlur={handlePasswordBlur} type="password" name="confirm-password" id="" required/>
          </div>
          <p style={{color:'red'}}> {error}</p>
          <input className="form-submit" type="submit" value="Sign Up" />
        </form>
        <p className="">
          Already registered?
          <Link className="form-link" to="/login">
             
          Login Please
          </Link>
        </p>
      </div>
    </div>
  </div>
  );
};

export default SignUp;
