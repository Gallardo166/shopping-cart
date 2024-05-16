import Sidebar from "./Sidebar";
import ItemCards from "./ItemCards";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const Shop = function () {
  const [category, setCategory] = useState("all");
  const products = useOutletContext();

  const handleChangeCategory = function (category) {
    setCategory(category);
  };

  return (
    <main>
      <section>
        <h1>Products</h1>
        {category === "all" || category === "electronics" ? (
          <ItemCards
            products={products.filter(
              (product) => product.category === "electronics"
            )}
          />
        ) : null}
        {category === "all" || category === "jewelery" ? (
          <ItemCards
            products={products.filter(
              (product) => product.category === "jewelery"
            )}
          />
        ) : null}
        {category === "all" || category === "men's clothing" ? (
          <ItemCards
            products={products.filter(
              (product) => product.category === "men's clothing"
            )}
          />
        ) : null}
        {category === "all" || category === "women's clothing" ? (
          <ItemCards
            products={products.filter(
              (product) => product.category === "women's clothing"
            )}
          />
        ) : null}
      </section>
      <Sidebar
        handleChangeCategory={handleChangeCategory}
        currentCategory={category}
      />
    </main>
  );
};

export default Shop;
