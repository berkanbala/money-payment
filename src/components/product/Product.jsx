import { moneyFormat } from "../../helpers";
import styles from "./product.module.scss";
import { useAppContext } from "../context/appContext";
import { Button } from "../ui/button/button";

function Product({ product }) {
  const { basket, total, money, setBasket } = useAppContext();

  const basketItem = basket.find((item) => item.id === product.id);

  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    // ürün daha önce eklenmiş
    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      setBasket([
        ...basket,
        {
          id: product.id,
          amount: 1,
        },
      ]);
    }
  };

  const removeBasket = () => {
    const currentBasket = basket.find((item) => item.id === product.id);
    const basketWithoutCurrent = basket.filter(
      (item) => item.id !== product.id
    );
    currentBasket.amount -= 1;
    if (currentBasket.amount === 0) {
      setBasket([...basketWithoutCurrent]);
    } else {
      setBasket([...basketWithoutCurrent, currentBasket]);
    }
  };

  return (
    <>
      <div className={styles.product}>
        <img src={product.image} alt="" />

        <h6>{product.title}</h6>

        <div className={styles.price}>$ {moneyFormat(product.price)}</div>

        <div className={styles.actions}>
          {/* <button
            className={styles.sellBtn}
            disabled={!basketItem}
            onClick={removeBasket}
          >
            Sat
          </button> */}
          <Button
            className={styles.sellBtn}
            disabled={!basketItem}
            onClick={removeBasket}
            text={"sat"}
          />

          <span className={styles.amount}>
            {(basketItem && basketItem.amount) || 0}
          </span>

          {/* <button
            className={styles.buyBtn}
            disabled={total + product.price > money}
            onClick={addBasket}
          >
            Satın al
          </button> */}
          <Button
            className={styles.buyBtn}
            disabled={total + product.price > money}
            onClick={addBasket}
            text={"satın al"}
          />
        </div>
      </div>
    </>
  );
}

export default Product;
