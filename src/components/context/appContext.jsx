import { createContext, useContext, useState } from "react";

export const MainContext = createContext({});

export const useAppContext = () => useContext(MainContext);

export const AppContext = ({ children }) => {
  const [money, setMoney] = useState(128000000000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const contextValue = {
    money,
    setMoney,
    basket,
    setBasket,
    total,
    setTotal,
  };
  return (
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  );
};
