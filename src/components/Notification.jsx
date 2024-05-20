import PropTypes from "prop-types";
import { useEffect } from "react";
import styles from "../styles/Notification.module.css";

const Notification = function({ recentPurchase }) {
  const product = recentPurchase[0];
  const quantity = recentPurchase[1];

  useEffect(() => {
    if (recentPurchase.length === 0) return;
    const dialog = document.querySelector("dialog");
    dialog.classList.remove(`${styles.hide}`);
    dialog.classList.add(`${styles.slideIn}`);
    dialog.show();

    setTimeout(() => {
      dialog.classList.add(`${styles.hide}`);
    }, 2000);

    setTimeout(() => {
      dialog.classList.remove(`${styles.slideIn}`);
    }, 2000);
  }, [recentPurchase])

  return (
    <dialog className={styles.notification}>
      <p className={styles.text}><span className={styles.bold}>{quantity}</span> x <span className={styles.bold}>{product}</span><br></br>was added to your cart.</p>
    </dialog>
  )
}

Notification.propTypes = {
  recentPurchase: PropTypes.array,
}

export default Notification;