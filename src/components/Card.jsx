import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = function ({ product }) {
  return (
    <Link to={`./${product.id}`}>
      <div className="card">
        <h3>{product.title}</h3>
        <h3>{product.price}</h3>
        <h3>{product.rating.rate}</h3>
      </div>
    </Link>
  );
};

Card.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Card;
