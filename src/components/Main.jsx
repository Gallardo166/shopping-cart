import { Link } from "react-router-dom";
import styles from "../styles/Main.module.css";

const Main = function() {
  return (
    <main className={styles.main} >
      <div className={styles.textContainer}>
        <h1 className={styles.title} >LifeStore</h1>
        <p className={styles.text} >Where convenience meets quality.</p>
      </div>
      <Link to="../shop" role="button" className={styles.button}>
        Shop now
      </Link>
      <picture className={styles.picture}>
        <source srcSet="./src/assets/images/nature.jpg" media="(max-width: 600px)" />
        <source srcSet="./src/assets/images/nature-cropped.jpg" />
        <img src="./src/assets/images/nature.jpg" alt="" className={styles.image} />
      </picture>
    </main>
  )
}

export default Main;