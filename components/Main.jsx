"use client"
import React, { useState } from "react";
import styles from "../app/page.module.css";
import { FaCheck } from "react-icons/fa6";
import { IoChevronBack, IoChevronDownOutline } from "react-icons/io5";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.main}>
      <h3 className={styles.mainHeading}>DISCOVER OUR PRODUCTS</h3>
      <p className={styles.mainSubHeading}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
      </p>
      <div className={styles.break1}></div>
      <div className={styles.filterContainer}>
        <div className={styles.filtredItemsNumber}>
          <p style={{ fontWeight: "700" }}>2332 ITEMS</p>
          <div className={styles.hideFilterContainer}>
            <IoChevronBack />
            <u>HIDE FILTER</u>
          </div>
        </div>
        <div className={styles.smallScrenFilter}>FILTER</div>
        <div className={styles.recommendedContainer} onClick={handleToggle}>
          RECOMMENDED
          <IoChevronDownOutline />
        </div>
        {isOpen && (
        <div className={styles.dropdownList}>
          <ul>
            <li><FaCheck/> RECOMMENDED</li>
            <li>NEWEST FIRST</li>
            <li>POPULER</li>
            <li>PRICE: HIGH TO LOW</li>
            <li>PRICE: LOW TO HIGH</li>
          </ul>
        </div>
      )}
      </div>
      <div className={styles.break1}></div>
    </div>
  );
};

export default Main;
