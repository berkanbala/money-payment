import BasketItem from "../basketItem/BasketItem";
import { moneyFormat } from "../../helpers";
import styles from "./basket.module.scss";
import { useAppContext } from "../context/appContext";
import { Button } from "../ui/button/button";

function Basket({ resetBasket, products }) {
  const { basket, total } = useAppContext();

  return (
    <>
      <div className={styles.basketContainer}>
        <h3>Alışveriş Detayları</h3>

        <ul>
          {basket.map((item) => (
            <BasketItem
              key={item.id}
              item={item}
              product={products.find((p) => p.id === item.id)}
            />
          ))}
        </ul>

        <div className={styles.total}>Toplam: ${moneyFormat(total)}</div>

        {/* <button className={styles.basketBtn} onClick={resetBasket}>
          Sepeti Sıfırla
        </button> */}
        <Button
          className={styles.basketBtn}
          onClick={resetBasket}
          text={"sepeti sıfırla"}
        />
      </div>
    </>
  );
}

export default Basket;
