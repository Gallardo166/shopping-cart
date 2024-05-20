import PropTypes from "prop-types";
import { useState, useContext } from "react";
import { Data } from "./Root";
import styles from "../styles/ItemInfo.module.css";

const ItemInfo = function ({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [currentInterval, setCurrentInterval] = useState(null);
  const { handleAddToCart, handleRecentPurchase } = useContext(Data);

  return (
    <main className={styles.main}>
      <img
        src={product.image}
        alt={product.title}
        width={200}
        className={styles.image}
      />
      <h1 className={styles.title}>{product.title}</h1>
      <p className={styles.rating}>
        {product.rating.rate * 2}
        <span className={styles.maxRate}>/10</span>{" "}
        {`(${product.rating.count})`}
      </p>
      <div className={styles.container}>
        <div className={styles.quantityContainer}>
          <label htmlFor="quantity" className={styles.quantity}>Quantity</label>
          <button
            className={styles.quantityButton}
            onPointerDown={() => {
              const input = document.querySelector("input");
              if (input.value === "1") return;
              setQuantity((quantity) => quantity - 1);
              const counter = setInterval(() => {
                if (input.value === "1") return;
                setQuantity((quantity) => quantity - 1);
              }, 200);
              setCurrentInterval(counter);
            }}
            onPointerUp={() => {
              clearInterval(currentInterval);
              setCurrentInterval(null);
            }}
          >
            -
          </button>
          <input
            className={styles.quantityInput}
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => {
              setQuantity(Number(e.target.value));
            }}
            onBlur={(e) => {
              if (e.target.value === "" || e.target.value.includes("0")) {
                setQuantity(1);
                return;
              }
              if (e.target.value.includes("0"))
                setQuantity(Number(e.target.value.replace("0", "")));
            }}
          />
          <button
            className={styles.quantityButton}
            onPointerDown={() => {
              setQuantity((quantity) => quantity + 1);
              const counter = setInterval(() => {
                if (quantity === 1) return;
                setQuantity((quantity) => quantity + 1);
              }, 200);
              setCurrentInterval(counter);
            }}
            onPointerUp={() => {
              clearInterval(currentInterval);
              setCurrentInterval(null);
            }}
          >
            +
          </button>
        </div>
        <button
          className={styles.addToCartButton}
          onClick={() => {
            handleAddToCart(
              product.title,
              product.id,
              product.image,
              product.price,
              quantity
            );
            handleRecentPurchase(product.title, quantity);
          }}
        >
          Add to cart
        </button>
      </div>
      <p className={styles.description}>{product.description}</p>
    </main>
  );
};

ItemInfo.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ItemInfo;
