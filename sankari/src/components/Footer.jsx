import React from "react";
import "../styles/global.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2 className="footer-logo">DBS Bank</h2>
          <p>
            Secure and seamless digital banking platform designed for modern financial services.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Open Account</li>
            <li>Account Overview</li>
            <li>Apply Loan</li>
            <li>Loan Status</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@dbsbank.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Madurai, India</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>

          {/* 🔥 THIS IS THE REPLACED PART */}
          <div className="social-icons">
            <FaGlobe />
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 DBS Bank. All rights reserved.
      </div>
    </footer>
  );
}