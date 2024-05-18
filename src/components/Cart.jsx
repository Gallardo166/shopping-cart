import { useContext } from "react";
import { Data } from "./Root";

const Cart = function () {
  const { cart, handleAddToCart, handleDeleteCartItem } = useContext(Data);
  const totalPrice = cart.reduce((total, product) => {
    return (total + (product.price * product.quantity))
  }, 0);

  return (
    <main>
      <h1>Your cart</h1>
      {cart.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.title} width={150}/>
          <h2>{product.title}</h2>
          <p>${product.price * product.quantity}</p>
          <button
            onClick={() => {
              const input = document.getElementById(product.id);

              if (input.value === "1") return;
              handleAddToCart(product.title, product.id, product.image, product.price, -1);
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
                  product.image,
                  product.price,
                  Number(e.target.value) - product.quantity
                );
            }}
            onBlur={(e) => {
              if (e.target.value === "" || e.target.value === "0") {
                handleAddToCart(
                  product.title,
                  product.id,
                  product.image,
                  product.price,
                  1 - product.quantity
                );
                return;
              }
              if (e.target.value.includes("0"))
                handleAddToCart(
                  product.title,
                  product.id,
                  product.image,
                  product.price,
                  Number(e.target.value.replace("0", "")) - product.quantity
                );
            }}
          />
          <button
            onClick={() => {
              handleAddToCart(product.title, product.id, product.image, product.price, 1);
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
      <div className="checkout">
        <h2>Checkout</h2>
        <p>Total: ${totalPrice}</p>
        <button>Checkout</button>
      </div>
    </main>
  );
};

export default Cart;
