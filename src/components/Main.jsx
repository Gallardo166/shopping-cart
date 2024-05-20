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
        <source srcSet="/images/nature.jpg" media="(max-width: 600px)" />
        <source srcSet="/images/nature-cropped.jpg" />
        <img src="/images/nature.jpg" alt="" className={styles.image} />
      </picture>
    </main>
  )
}

export default Main;