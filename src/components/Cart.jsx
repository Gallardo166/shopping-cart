import { useOutletContext } from "react-router-dom";

const Cart = function() {
  const { cart } = useOutletContext();

  return (
    <main>
      <h1>Your cart</h1>
      {cart.map(product => (
        <div key={product.id}>
          <p>{product.title}</p>
          <p>{product.quantity}</p>
        </div>
      ))}
    </main>
  )
}

export default Cart;