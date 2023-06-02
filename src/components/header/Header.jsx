import { moneyFormat } from "../../helpers";
import { useAppContext } from "../context/appContext";
import styles from "./header.module.scss";

function Header() {
  const { total, money } = useAppContext();
  return (
    <>
      {total > 0 && money - total !== 0 && (
        <div className={styles.header}>
          Harcayacak <span>$ {moneyFormat(money - total)}</span> paranız kaldı!
        </div>
      )}
      {total === 0 && (
        <div className={styles.header}>
          Harcamak için <span>$ {moneyFormat(money)}</span> paranız var!
        </div>
      )}
      {money - total === 0 && (
        <div className={styles.headerEmpty}>
          Paran bitti, parasız insan boş insandır!
        </div>
      )}
    </>
  );
}

export default Header;
