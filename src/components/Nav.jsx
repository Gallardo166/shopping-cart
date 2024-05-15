import { Link } from "react-router-dom";

const Nav = function() {
  return (
    <nav>
      <ul>
        <Link to="/">Main</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Cart</Link>
      </ul>
    </nav>
  )
}

export default Nav;