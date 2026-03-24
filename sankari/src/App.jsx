import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AccountCreation from "./pages/AccountCreation";
import AccountView from "./pages/AccountView";
import LoanApplication from "./pages/LoanApplication";
import LoanStatusTracking from "./pages/LoanStatusTracking";
import Footer from "./components/Footer";
import "./styles/global.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <div className="brand-logo">DB</div>
        <div>
          <h2>DBS Bank Portal</h2>
          <p>Digital Banking Services</p>
        </div>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/account/create">Open Account</Link>
        <Link to="/account/view">Account Overview</Link>
        <Link to="/loan/apply">Apply Loan</Link>
        <Link to="/loan/status">Loan Status</Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-tag">Smart • Secure • Seamless</p>
          <h1 className="hero-title">Premium Digital Banking Experience</h1>
          <p className="hero-description">
            Manage your account, monitor transactions, apply for loans, and
            track EMIs through a secure and modern digital banking platform.
          </p>

          <div className="hero-buttons">
            <Link to="/account/create" className="primary-btn hero-btn">
              Open Account
            </Link>
            <Link
              to="/loan/apply"
              className="secondary-btn hero-btn secondary-hero-btn"
            >
              Apply Loan
            </Link>
          </div>
        </div>
      </section>

      <section className="home-content">
        <div className="intro-grid">
          <div className="info-card">
            <h3>Smart Account Management</h3>
            <p>
              Open and manage accounts digitally with secure access and
              real-time balance tracking.
            </p>
          </div>

          <div className="info-card">
            <h3>Fast Loan Processing</h3>
            <p>
              Apply for loans and track approval status with complete
              transparency.
            </p>
          </div>

          <div className="info-card">
            <h3>Secure Transactions</h3>
            <p>
              View transaction history and monitor your financial activities
              safely.
            </p>
          </div>
        </div>

        <div className="banking-highlights">
          <div className="highlight-card">
            <h2>Why Choose Our Banking System?</h2>
            <ul>
              <li>Real-time financial tracking</li>
              <li>Loan and EMI management</li>
              <li>Secure digital banking access</li>
              <li>Simple and user-friendly interface</li>
            </ul>
          </div>

          <div className="stats-box">
            <div className="mini-stat">
              <span>24/7</span>
              <p>Access</p>
            </div>
            <div className="mini-stat">
              <span>Secure</span>
              <p>System</p>
            </div>
            <div className="mini-stat">
              <span>Fast</span>
              <p>Processing</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account/create" element={<AccountCreation />} />
        <Route path="/account/view" element={<AccountView />} />
        <Route path="/loan/apply" element={<LoanApplication />} />
        <Route path="/loan/status" element={<LoanStatusTracking />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}