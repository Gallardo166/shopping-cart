import PropTypes from "prop-types";
import styles from "../styles/Sidebar.module.css";

const Sidebar = function ({ handleChangeCategory }) {
  return (
    <aside className={styles.sidebar}>
      <fieldset className={styles.fieldset}>
        <legend role="legend" aria-label="Categories">Categories:</legend>
        <div className={styles.options}>
          <div>
            <input
              type="radio"
              name="category"
              id="all"
              onClick={(e) => handleChangeCategory(e.target.id)}
              defaultChecked
            />
            <label htmlFor="all" className={styles.label}>All</label>
          </div>
          <div>
            <input
              type="radio"
              name="category"
              id="electronics"
              onClick={(e) => handleChangeCategory(e.target.id)}
            />
            <label htmlFor="electronics" className={styles.label}>Electronics</label>
          </div>
          <div>
            <input
              type="radio"
              name="category"
              id="jewelery"
              onClick={(e) => handleChangeCategory(e.target.id)}
            />
            <label htmlFor="jewelery" className={styles.label}>Jewelery</label>
          </div>
          <div>
            <input
              type="radio"
              name="category"
              id="men's clothing"
              onClick={(e) => handleChangeCategory(e.target.id)}
            />
            <label htmlFor="men's clothing" className={styles.label}>Men&apos;s Clothing</label>
          </div>
          <div>
            <input
              type="radio"
              name="category"
              id="women's clothing"
              onClick={(e) => handleChangeCategory(e.target.id)}
            />
            <label htmlFor="women's clothing" className={styles.label}>Women&apos;s Clothing</label>
          </div>
        </div>
      </fieldset>
    </aside>
  );
};

Sidebar.propTypes = {
  handleChangeCategory: PropTypes.func.isRequired,
};

export default Sidebar;
