import React from "react";import "../styles/global.css";

export default function LoanStatusTracking() {
  const emiSchedule = [
    { id: 1, dueDate: "05 Apr 2026", amount: "₹8,500", status: "Paid" },
    { id: 2, dueDate: "05 May 2026", amount: "₹8,500", status: "Pending" },
    { id: 3, dueDate: "05 Jun 2026", amount: "₹8,500", status: "Pending" }
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Loan Status Tracking</h1>
      <p className="page-subtitle">
        Follow your loan approval progress and monitor upcoming EMI payments.
      </p>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Loan Type</div>
          <div className="stat-value">Personal</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Loan Amount</div>
          <div className="stat-value">₹1,00,000</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Current Status</div>
          <div className="stat-value">
            <span className="badge approved">Approved</span>
          </div>
        </div>
      </div>

      <div className="page-card" style={{ marginBottom: "24px" }}>
        <h2 className="page-title" style={{ fontSize: "22px", marginBottom: "8px" }}>
          Application Progress
        </h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Loan Application Submitted</h4>
              <p>Your application was successfully submitted for review.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Verification Completed</h4>
              <p>Your income and account details were verified by the officer.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Loan Approved</h4>
              <p>Your loan has been approved and EMI schedule is generated.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-card">
        <h2 className="page-title" style={{ fontSize: "22px", marginBottom: "8px" }}>
          EMI Schedule
        </h2>

        <table className="data-table">
          <thead>
            <tr>
              <th>EMI No</th>
              <th>Due Date</th>
              <th>Amount</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {emiSchedule.map((emi, index) => (
              <tr key={emi.id}>
                <td>{index + 1}</td>
                <td>{emi.dueDate}</td>
                <td>{emi.amount}</td>
                <td>
                  <span
                    className={`badge ${
                      emi.status === "Paid" ? "approved" : "pending"
                    }`}
                  >
                    {emi.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}