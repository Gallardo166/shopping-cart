import PropTypes from "prop-types";

const Card = function({ product }) {
  return (
    <div className="card">
      <p>{product.title}</p>
      <p>{product.price}</p>
      <p>{product.rating.rate}</p>
    </div>
  )
}

Card.propTypes = {
  product: PropTypes.object.isRequired,
}

export default Card;