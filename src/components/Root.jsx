import { useEffect, useState, createContext } from "react";
import Nav from "./Nav";
import Notification from "./Notification";
import { Outlet } from "react-router-dom";
import styles from "../styles/Root.module.css";

export const Data = createContext({});

const Root = function() {
  const [products, setProducts] = useState(null);
  const [cart, setCart] = useState([]);
  const [recentPurchase, setRecentPurchase] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response => response.json()))
      .then((response => setProducts(response)))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [])

  const handleAddToCart = function(title, id, image, price, quantity) {
    if (cart.filter(product => product.id === id).length === 1) {
      const newCart = [];

      cart.forEach((product) => {
        if (product.id !== id) {
          newCart.push(product);
          return;
        }
        newCart.push({...product, quantity: product.quantity + quantity});
      })

      setCart(newCart);
      return;
    }

    const newCart = [...cart, { title, id, image, price, quantity }];
    setCart(newCart);
  };

  const handleDeleteCartItem = function(id) {
    const newCart = cart.filter(product => product.id !== id);
    setCart(newCart);
  }

  const handleRecentPurchase = function(title, quantity) {
    const newRecentPurchase = [title, quantity];
    setRecentPurchase(newRecentPurchase);
  }

  if (loading) return <p className={styles.text}>Loading...</p>;
  if (error) return <p className={styles.text}>A network error occurred.</p>

  return (
    <div>
      <Nav />
      <Data.Provider value={{ products, cart, handleAddToCart, handleDeleteCartItem, handleRecentPurchase }}>
        <Outlet />
      </Data.Provider>
      <Notification recentPurchase={recentPurchase}  />
    </div>
  )
}

export default Root;