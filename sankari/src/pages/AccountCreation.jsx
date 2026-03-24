import { useState } from "react";
import "../styles/global.css";

export default function AccountCreation() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    accountType: "Savings",
    initialDeposit: "",
    address: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Account Created:", formData);
  };

  return (
    <div className="page-container">
      <div className="page-card">
        <h1 className="page-title">Open New Bank Account</h1>
        <p className="page-subtitle">
          Create a secure digital banking account with premium financial access.
        </p>

        <form onSubmit={handleSubmit} className="form-grid">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter full name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter mobile number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Account Type</label>
            <select
              name="accountType"
              value={formData.accountType}
              onChange={handleChange}
            >
              <option>Savings</option>
              <option>Current</option>
            </select>
          </div>

          <div className="form-group">
            <label>Initial Deposit</label>
            <input
              type="number"
              name="initialDeposit"
              placeholder="Enter deposit amount"
              value={formData.initialDeposit}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full-width">
            <label>Address</label>
            <textarea
              name="address"
              placeholder="Enter residential address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="button-row">
            <button type="submit" className="primary-btn">
              Create Account
            </button>
            <button type="button" className="secondary-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}