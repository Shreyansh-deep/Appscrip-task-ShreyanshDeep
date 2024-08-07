import React from "react";
import styles from "../app/page.module.css";
import { IoBagHandleOutline, IoMenu } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { IoChevronDown } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.headerContainer}>
        <div style={{display: "flex", alignItems: "center"}}>
        <IoMenu className={styles.hamburgerIcon} />
        <img
          src="/images/Logo.png"
          alt="logo-image"
          className={styles.logoImage}
        />
        </div>
        <h3 style={{ fontSize: "35px", fontWeight: "800" }}>LOGO</h3>
        <div className={styles.iconContainer}>
          <IoSearch className={styles.icon} />
          <FaRegHeart className={styles.icon} />
          <IoBagHandleOutline className={styles.icon} />
          <RxAvatar className={styles.icon} />
          <p
            className={styles.language}
            style={{ fontSize: "20px", fontWeight: "600" }}
          >
            ENG
            <IoChevronDown />
          </p>
        </div>
      </div>
      <div className={styles.tabContainer}>
        <p>SHOP</p>
        <p>SKILLS</p>
        <p>STORIES</p>
        <p>ABOUT</p>
        <p>CONTACT US</p>
      </div>
      <div className={styles.break}></div>
    </div>
  );
};

export default Navbar;
