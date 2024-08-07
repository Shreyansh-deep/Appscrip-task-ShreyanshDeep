import React from "react";
import styles from "../app/page.module.css";
import { IoIosHeartEmpty } from "react-icons/io";

const cardData = [
  {
    image: "images/img1.webp",
    productName: "Product 1",
    description: "This is a description for Product 1",
  },
  {
    image: "images/img1.webp",
    productName: "Product 2",
    description: "This is a description for Product 2",
  },
  {
    image: "images/img1.webp",
    productName: "Product 3",
    description: "This is a description for Product 3",
  },
  {
    image: "images/img1.webp",
    productName: "Product 3",
    description: "This is a description for Product 3",
  },
  {
    image: "images/img1.webp",
    productName: "Product 3",
    description: "This is a description for Product 3",
  },
  {
    image: "images/img1.webp",
    productName: "Product 3",
    description: "This is a description for Product 3",
  },
  {
    image: "images/img1.webp",
    productName: "Product 3",
    description: "This is a description for Product 3",
  },
  {
    image: "images/img1.webp",
    productName: "Product 3",
    description: "This is a description for Product 3",
  },
  {
    image: "images/img1.webp",
    productName: "Product 3",
    description: "This is a description for Product 3",
  },
  {
    image: "images/img1.webp",
    productName: "Product 3",
    description: "This is a description for Product 3",
  },
  {
    image: "images/img1.webp",
    productName: "Product 3",
    description: "This is a description for Product 3",
  },
  {
    image: "images/img1.webp",
    productName: "Product 3",
    description: "This is a description for Product 3",
  },
  {
    image: "images/img1.webp",
    productName: "Product 3",
    description: "This is a description for Product 3",
  },
  {
    image: "images/img1.webp",
    productName: "Product 3",
    description: "This is a description for Product 3",
  },
  {
    image: "images/img1.webp",
    productName: "Product 3",
    description: "This is a description for Product 3",
  },
  {
    image: "images/img1.webp",
    productName: "Product 3",
    description: "This is a description for Product 3",
  },
];

const CardList = () => {
  return (
    <div className={styles.cardcontainer}>
      {cardData.map((card, index) => (
        <div className={styles.card} key={index}>
          <img
            src={card.image}
            alt={card.productName}
            className={styles.cardImage}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h2 className={styles.productName}>PRODUCT {index}</h2>
            <IoIosHeartEmpty />
          </div>
          <p className={styles.description}>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;
