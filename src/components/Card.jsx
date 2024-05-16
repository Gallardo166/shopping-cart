import PropTypes from "prop-types";

const Card = function({ product }) {
  return (
    <div className="card">
      <h3>{product.title}</h3>
      <h3>{product.price}</h3>
      <h3>{product.rating.rate}</h3>
    </div>
  )
}

Card.propTypes = {
  product: PropTypes.object.isRequired,
}

export default Card;