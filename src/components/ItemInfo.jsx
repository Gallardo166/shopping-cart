import PropTypes from "prop-types";
import { useState, useContext } from "react";
import { Data } from "./Root";

const ItemInfo = function ({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [currentInterval, setCurrentInterval] = useState(null);
  const { handleAddToCart, handleRecentPurchase } = useContext(Data);

  return (
    <>
      <h1>{product.title}</h1>
      <p>{`${product.rating.rate} (${product.rating.count})`}</p>
      <img src={product.image} alt={product.title} width={200}/>
      <p>{product.description}</p>
      <label htmlFor="quantity">Quantity</label>
      <button
        onPointerDown={() => {
          const input = document.querySelector("input");

          if (input.value === "1") return;
          setQuantity((quantity) => quantity - 1);

          const counter = setInterval(() => {
            if (input.value === "1") return;
            setQuantity(quantity => quantity - 1);
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
          if (e.target.value.includes("0")) setQuantity(Number(e.target.value.replace("0", "")));
        }}
      />
      <button
        onPointerDown={() => {
          setQuantity((quantity) => quantity + 1);

          const counter = setInterval(() => {
            if (quantity === 1) return
            setQuantity(quantity => quantity + 1);
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
      <button onClick={() => {
        handleAddToCart(product.title, product.id, product.image, product.price, quantity)
        handleRecentPurchase(product.title, quantity);
        }}>Add to cart</button>
    </>
  );
};

ItemInfo.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ItemInfo;
