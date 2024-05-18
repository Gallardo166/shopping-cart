import { useEffect, useState, createContext } from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

export const Data = createContext({});

const Root = function() {
  const [products, setProducts] = useState(null);
  const [cart, setCart] = useState([]);
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error occurred.</p>

  console.log(products);

  return (
    <div>
      <Nav />
      <Data.Provider value={{ products, cart, handleAddToCart, handleDeleteCartItem }}>
        <Outlet />
      </Data.Provider>
    </div>
  )
}

export default Root;