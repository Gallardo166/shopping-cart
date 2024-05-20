import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../styles/Card.module.css";

const Card = function ({ product }) {
  return (
    <Link className={styles.link} to={`./${product.id}`}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={product.image} alt={product.title} width={160} className={styles.image} />
        </div>
        <div className={styles.information}>
          <h3 className={styles.title}>{product.title}</h3>
          <h3 className={styles.price}><span className={styles.dollar}>$</span>{product.price}</h3>
          <h3 className={styles.rating}>{product.rating.rate * 2}<span className={styles.maxRate}> /10</span></h3>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Card;
