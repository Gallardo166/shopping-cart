import Card from "./Card";
import PropTypes from "prop-types";

const ItemCards = function({ products }) {
  return (
    <>
      {products.map((product) => <Card key={product.id} product={product}/>)}
    </>
  )
}

ItemCards.propTypes = {
  products: PropTypes.array.isRequired,
}

export default ItemCards;