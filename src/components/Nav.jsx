import { Link } from "react-router-dom";
import styles from "../styles/Nav.module.css"

const Nav = function() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.ul}>
        <li>
          <Link className={styles.link} to="/">
            <img src="/spa.svg" alt="logo" className={styles.icon} aria-label="logo" />
          </Link>
        </li>
        <div className={styles.container}>
          <li>
            <Link className={styles.link} to="/shop">Shop</Link>
          </li>
          <li>
            <Link className={styles.link} to="/about">About</Link>
          </li>
          <li>
            <Link className={styles.link} to="/cart">Cart</Link>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default Nav;