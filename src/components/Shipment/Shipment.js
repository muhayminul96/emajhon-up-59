import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Shipment = () => {

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [user] = useAuthState(auth)

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };
  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };
  const handlePhoneBlur = (event) => {
    setPhone(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className="form-container">
        <div className="">
          <h3 className="form-title">Shipping Info</h3>
          <form action onSubmit={handleCreateUser}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                onBlur={handleNameBlur}
                type="text"
                name="name"
                id=""
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={user?.email}
                readOnly
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Your Address</label>
              <input
                onBlur={handleAddressBlur}
                type="teax"
                name="address"
                id=""
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Your Phone</label>
              <input
                onBlur={handlePhoneBlur}
                type="text"
                name="phone"
                id=""
                required
              />
            </div>

            <input className="form-submit" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shipment;
