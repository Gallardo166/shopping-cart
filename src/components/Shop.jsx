import Sidebar from "./Sidebar";
import ItemCards from "./ItemCards";
import ItemInfo from "./ItemInfo";
import { useState, useContext } from "react";
import { Data } from "./Root";
import { useParams } from "react-router-dom";
import styles from "../styles/Shop.module.css";

const Shop = function () {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const { products } = useContext(Data);
  const { id } = useParams();
  const queriedProducts =
    query !== ""
      ? products.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        )
      : products;

  const handleChangeCategory = function (category) {
    setCategory(category);
  };

  if (id) {
    return (
      <main>
        <ItemInfo
          product={products.filter((product) => product.id === Number(id))[0]}
        />
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.search}>
        <label className={styles.searchLabel} htmlFor="search">
          <img className={styles.searchIcon} src="./public/magnify.svg" alt="Search icon" aria-label="Search" />
        </label>
        <input
          id="search"
          className={styles.searchInput}
          type="text"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <Sidebar
        className={styles.filter}
        handleChangeCategory={handleChangeCategory}
        currentCategory={category}
      />
      <section className={styles.products}>
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
    </main>
  );
};

export default Shop;
