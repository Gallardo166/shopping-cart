import { useEffect, useState } from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

const Root = function() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response => response.json()))
      .then((response => setProducts(response)))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error occurred.</p>

  console.log(products);

  return (
    <div>
      <Nav />
      <Outlet context={products} />
    </div>
  )
}

export default Root;