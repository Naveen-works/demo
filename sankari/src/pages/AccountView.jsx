
import React from "react";
import "../styles/global.css";

export default function AccountView() {
  const transactions = [
    {
      id: 1,
      type: "Credit",
      amount: "₹25,000",
      date: "24 Mar 2026",
      description: "Salary Credit"
    },
    {
      id: 2,
      type: "Debit",
      amount: "₹3,200",
      date: "23 Mar 2026",
      description: "Online Purchase"
    },
    {
      id: 3,
      type: "Debit",
      amount: "₹1,500",
      date: "22 Mar 2026",
      description: "Electricity Bill"
    }
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">My Account Overview</h1>
      <p className="page-subtitle">
        Monitor your balance, account details, and recent banking activity.
      </p>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Available Balance</div>
          <div className="stat-value">₹1,28,500</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Account Number</div>
          <div className="stat-value">XXXXXX4582</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Account Type</div>
          <div className="stat-value">Savings</div>
        </div>
      </div>

      <div className="page-card">
        <h2 className="page-title" style={{ fontSize: "22px", marginBottom: "8px" }}>
          Recent Transactions
        </h2>
        <p className="page-subtitle" style={{ marginBottom: "12px" }}>
          Secure record of your latest credits and debits.
        </p>

        <table className="data-table">
          <thead>
            <tr>
              <th>Transaction Type</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr key={txn.id}>
                <td>{txn.type}</td>
                <td>{txn.amount}</td>
                <td>{txn.date}</td>
                <td>{txn.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}