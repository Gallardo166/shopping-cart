import { useContext } from "react";
import { Data } from "./Root";

const Cart = function () {
  const { cart, handleAddToCart, handleDeleteCartItem } = useContext(Data);

  console.log(cart);

  return (
    <main>
      <h1>Your cart</h1>
      {cart.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <button
            onClick={() => {
              const input = document.getElementById(product.id);

              if (input.value === "1") return;
              handleAddToCart(product.title, product.id, product.price, -1);
            }}
          >
            -
          </button>
          <input
            type="number"
            className="input"
            id={product.id}
            value={product.quantity}
            onChange={(e) => {
              if (e.target.value === "" || e.target.value === "")
                handleAddToCart(
                  product.title,
                  product.id,
                  product.price,
                  Number(e.target.value) - product.quantity
                );
            }}
            onBlur={(e) => {
              if (e.target.value === "" || e.target.value === "0") {
                handleAddToCart(
                  product.title,
                  product.id,
                  product.price,
                  1 - product.quantity
                );
                return;
              }
              if (e.target.value.includes("0"))
                handleAddToCart(
                  product.title,
                  product.id,
                  product.price,
                  Number(e.target.value.replace("0", "")) - product.quantity
                );
            }}
          />
          <button
            onClick={() => {
              handleAddToCart(product.title, product.id, product.price, 1);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              handleDeleteCartItem(product.id);
            }}
          >Delete Item</button>
        </div>
      ))}
    </main>
  );
};

export default Cart;
