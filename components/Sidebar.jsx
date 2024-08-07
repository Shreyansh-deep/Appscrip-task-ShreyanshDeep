"use client";

import React, { useState } from "react";
import styles from "../app/page.module.css";
import { IoChevronDownOutline } from "react-icons/io5";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.sidebar}>
      <div className={styles.checkebox}>
        <MdCheckBoxOutlineBlank />
        <p>CUSTOMIZBLE</p>
      </div>
      <div className={styles.sidebarrow} onClick={handleToggle}>
        <p>IDEAL FOR</p>
        <IoChevronDownOutline />
        {isOpen && (
          <div className={styles.dropdownList2}>
            <ul>
              <li>
                <MdCheckBoxOutlineBlank />
                Men
              </li>
              <li>
                <MdCheckBoxOutlineBlank />
                Women 2
              </li>
              <li>
                <MdCheckBoxOutlineBlank />
                Baby & Kids
              </li>
            </ul>
          </div>
        )}
      </div>
      <p className={styles.selectedFilters}>All</p>
      <hr></hr>
      <div className={styles.sidebarrow}>
        <p>OCCASION</p>
        <IoChevronDownOutline />
      </div>
      <p className={styles.selectedFilters}>All</p>
      <hr></hr>
      <div className={styles.sidebarrow}>
        <p>WORK</p>
        <IoChevronDownOutline />
      </div>
      <p className={styles.selectedFilters}>All</p>
      <hr></hr>
      <div className={styles.sidebarrow}>
        <p>FABRIC</p>
        <IoChevronDownOutline />
      </div>
      <p className={styles.selectedFilters}>All</p>
      <hr></hr>
      <div className={styles.sidebarrow}>
        <p>SEGMENT</p>
        <IoChevronDownOutline />
      </div>
      <p className={styles.selectedFilters}>All</p>
      <hr></hr>
      <div className={styles.sidebarrow}>
        <p>SUITABLE FOR</p>
        <IoChevronDownOutline />
      </div>
      <p className={styles.selectedFilters}>All</p>
      <hr></hr>
      <div className={styles.sidebarrow}>
        <p>RAW MATERIALS</p>
        <IoChevronDownOutline />
      </div>
      <p className={styles.selectedFilters}>All</p>
      <hr></hr>
      <div className={styles.sidebarrow}>
        <p>PATTERN</p>
        <IoChevronDownOutline />
      </div>
      <p className={styles.selectedFilters}>All</p>
      <hr></hr>
    </div>
  );
};

export default Sidebar;
