import "./App.css";
import { useEffect } from "react";
import { useAppContext } from "./components/context/appContext";
import Header from "./components/header/Header";
import Product from "./components/product/Product";
import Basket from "./components/basket/Basket";
import products from "./products.json";

function App() {
  const { money, basket, setBasket, total, setTotal } = useAppContext();

  const resetBasket = () => {
    setBasket([]);
  };

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket, setTotal]);

  return (
    <>
      <Header total={total} money={money} />
      <div className="container products">
        {products.map((product) => (
          <Product
            key={product.id}
            total={total}
            money={money}
            basket={basket}
            setBasket={setBasket}
            product={product}
          />
        ))}
      </div>
      {total > 0 && (
        <Basket
          resetBasket={resetBasket}
          products={products}
          total={total}
          basket={basket}
        />
      )}
    </>
  );
}

export default App;
