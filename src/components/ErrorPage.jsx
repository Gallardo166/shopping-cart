import { Link } from "react-router-dom";
import styles from "../styles/Root.module.css";

const ErrorPage = function() {
  return (
    <div className={styles.container}>
      <h1>Are you lost?</h1>
      <Link className={styles.link} to="/">Back to home</Link>
    </div>
  )
}

export default ErrorPage;