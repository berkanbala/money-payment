import styles from "./basketItem.module.scss";

function BasketItem({ item, product }) {
  return (
    <>
      <li className={styles.basketItem}>
        {product.title} <span>x {item.amount}</span>
      </li>
    </>
  );
}

export default BasketItem;
