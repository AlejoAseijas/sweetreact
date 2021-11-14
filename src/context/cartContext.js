import { useState, createContext, useContext } from "react";
const cartContext = createContext();

export const useCartContext = () => useContext(cartContext);

export const CartContext = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const agregarItem = (item, cantidad) => {
    let product = {
      name: item.name,
      price: item.price,
      id: item.id.trim(),
      qty: cantidad,
    };
    setCartList((cartList) => [...cartList, product]);
  };

  const deleteFromCart = (id) => {
    const deleteProduct = cartList.filter((prod) => prod.id !== id);
    setCartList(deleteProduct);
  };

  const iconCart = () => {
    return cartList.reduce((acum, valor) => acum + valor.qty, 0);
  };

  const vaciarCarrito = () => {
    setCartList([]);
  };

  return (
    <cartContext.Provider
      value={{
        cartList,
        agregarItem,
        vaciarCarrito,
        iconCart,
        deleteFromCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
