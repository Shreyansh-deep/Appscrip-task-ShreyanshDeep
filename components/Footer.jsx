import React from "react";
import styles from "../app/page.module.css";
import { FaInstagram } from "react-icons/fa6";
import { PiLinkedinLogoBold } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.rightpart}>
        <div className={styles.leftpart}>
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from metta musa</p>
          <div style={{ display: "flex", gap: "20px" }}>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
        <div >
          <p>Contact Us</p>
          <p>
            Phone: <span>123-456-7890</span>
          </p>
          <p>
            Email: <span>example@example.com</span>
          </p>
        </div>
      </div>
      <div className={styles.break1}></div>
      <div className={styles.lowerpart}>
        <div className={styles.column}>
          <h4>metta muse</h4>
          <p>About Us</p>
          <p>Stories</p>
          <p>Atrisans</p>
          <p>Boutique</p>
        </div>
        <div className={styles.column}>
          <h4>QUICK LINKS</h4>
          <p>Orders and Shipping</p>
          <p>Join/Login as a seller</p>
          <p>Payment and pricing</p>
          <p>Return and refunds</p>
          <p>Privacy policy</p>
          <p>Terms and Conditions</p>
        </div>
        <div className={styles.column}>
          <h4>Follow Us</h4>
          <div style={{ display: "flex", gap: "20px" }}>
            <FaInstagram />
            <PiLinkedinLogoBold />
          </div>
        </div>
      </div>
      <div className={styles.bottompart}></div>
    </footer>
  );
};

export default Footer;
