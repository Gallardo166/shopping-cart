import { useContext } from "react";
import { Data } from "./Root";
import styles from "../styles/Cart.module.css";

const Cart = function () {
  const { cart, handleAddToCart, handleDeleteCartItem } = useContext(Data);
  const totalPrice = cart.reduce((total, product) => {
    return (total + (Math.floor(product.price * product.quantity * 100) / 100))
  }, 0);

  return (
    <main className={styles.main}>
      <h1 className={styles.header}>Your cart</h1>
      <div className={styles.products}>
        {cart.map((product) => (
          <div key={product.id} className={styles.product}>
            <img src={product.image} alt={product.title} className={styles.image}/>
            <div className={styles.information}>
              <h2 className={styles.title}>{product.title}</h2>
              <p className={styles.price}>{product.quantity} x ${product.price}: ${Math.floor(product.price * product.quantity * 100) / 100}</p>
              <div className={styles.container}>
                <div className={styles.quantityContainer}>
                  <button
                    className={styles.quantityButton}
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
                    className={`input ${styles.quantityInput}`}
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
                    className={styles.quantityButton}
                    onClick={() => {
                      handleAddToCart(product.title, product.id, product.image, product.price, 1);
                    }}
                  >
                    +
                  </button>
                </div>
                <button
                  className={styles.deleteButton}
                  onClick={() => {
                    handleDeleteCartItem(product.id);
                  }}
                >Delete Item</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr></hr>
      <div className={styles.checkout}>
        <p>Total: ${totalPrice}</p>
        <button className={styles.checkoutButton}>Checkout</button>
      </div>
    </main>
  );
};

export default Cart;
