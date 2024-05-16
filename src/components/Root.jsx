import { useEffect, useState } from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

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

  const handleAddToCart = function(title, id, price, quantity) {
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

    const newCart = [...cart, { title, id, price, quantity }];
    setCart(newCart);
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error occurred.</p>

  console.log(products);

  return (
    <div>
      <Nav />
      <Outlet context={{ products, cart, handleAddToCart }} />
    </div>
  )
}

export default Root;