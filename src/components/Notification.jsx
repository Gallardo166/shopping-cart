import PropTypes from "prop-types";
import { useEffect } from "react";

const Notification = function({ recentPurchase }) {
  const product = recentPurchase[0];
  const quantity = recentPurchase[1];

  useEffect(() => {
    if (recentPurchase.length === 0) return;
    const dialog = document.querySelector("dialog");
    dialog.show();

    setTimeout(() => dialog.close(), 3000);
  }, [recentPurchase])

  return (
    <dialog>
      <p>{quantity} x {product} was added to your cart.</p>
    </dialog>
  )
}

Notification.propTypes = {
  recentPurchase: PropTypes.array,
}

export default Notification;