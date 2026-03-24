import { useState } from "react";
import "../styles/global.css";

export default function LoanApplication() {
  const [loanData, setLoanData] = useState({
    loanType: "Personal",
    amount: "",
    tenure: "",
    income: "",
    purpose: ""
  });

  const handleChange = (e) => {
    setLoanData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Loan Application Submitted:", loanData);
  };

  return (
    <div className="page-container">
      <div className="page-card">
        <h1 className="page-title">Apply for a Loan</h1>
        <p className="page-subtitle">
          Submit your application digitally for faster approval and transparent tracking.
        </p>

        <form onSubmit={handleSubmit} className="form-grid">
          <div className="form-group">
            <label>Loan Type</label>
            <select
              name="loanType"
              value={loanData.loanType}
              onChange={handleChange}
            >
              <option>Personal</option>
              <option>Home</option>
              <option>Education</option>
            </select>
          </div>

          <div className="form-group">
            <label>Loan Amount</label>
            <input
              type="number"
              name="amount"
              placeholder="Enter required amount"
              value={loanData.amount}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Tenure (Months)</label>
            <input
              type="number"
              name="tenure"
              placeholder="Enter loan tenure"
              value={loanData.tenure}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Monthly Income</label>
            <input
              type="number"
              name="income"
              placeholder="Enter monthly income"
              value={loanData.income}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full-width">
            <label>Purpose of Loan</label>
            <textarea
              name="purpose"
              placeholder="Explain why you need this loan"
              value={loanData.purpose}
              onChange={handleChange}
            />
          </div>

          <div className="button-row">
            <button type="submit" className="primary-btn">
              Submit Application
            </button>
            <button type="button" className="secondary-btn">
              Save Draft
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}