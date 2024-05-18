import Sidebar from "./Sidebar";
import ItemCards from "./ItemCards";
import ItemInfo from "./ItemInfo";
import { useState, useContext } from "react";
import { Data } from "./Root";
import { useParams } from "react-router-dom";

const Shop = function () {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const { products } = useContext(Data);
  const { id } = useParams();
  const queriedProducts = (query !== "") ? products.filter(product => product.title.toLowerCase().includes(query)) : products;

  const handleChangeCategory = function (category) {
    setCategory(category);
  };

  if (id) {
    return (
      <main>
        <ItemInfo product={products.filter(product => product.id === Number(id))[0]}/>
      </main>
    )
  }

  return (
    <main>
      <input type="text" onChange={(e) => {
        setQuery(e.target.value);
      }}/>
      <section>
        <h1>Products</h1>
        {category === "all" || category === "electronics" ? (
          <ItemCards
            products={queriedProducts.filter(
              (product) => product.category === "electronics"
            )}
          />
        ) : null}
        {category === "all" || category === "jewelery" ? (
          <ItemCards
            products={queriedProducts.filter(
              (product) => product.category === "jewelery"
            )}
          />
        ) : null}
        {category === "all" || category === "men's clothing" ? (
          <ItemCards
            products={queriedProducts.filter(
              (product) => product.category === "men's clothing"
            )}
          />
        ) : null}
        {category === "all" || category === "women's clothing" ? (
          <ItemCards
            products={queriedProducts.filter(
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
