import React, { useState } from "react";
import { useCartContext } from "../context/cartContext";
import CheckOut from "./CheckOut";
function Cart() {
  const { cartList, deleteFromCart, vaciarCarrito } = useCartContext();
  const [state, setState] = useState(false);

  let finalPriceOrder = cartList.reduce(
    (acum, valor) => acum + valor.qty * valor.price,
    0
  );

  return (
    <>
      <h1 className="text-center">Productos en el carrito</h1>
      {cartList.map((product) => {
        return (
          <h3 className="border border-dark m-1 p-1">
            Nombre del producto:{product.name}/Cantidad:{product.qty}/Precio:
            {product.price}$
            <button
              className="btn btn-danger m-2"
              onClick={() => {
                deleteFromCart(product.id);
              }}
            >
              Borrar Item
            </button>
          </h3>
        );
      })}
      <h1 className="text-center">Precio total: {finalPriceOrder} $</h1>
      <div className="conatiner text-center">
        <button
          className="btn btn-outline-success m-1 p-1"
          onClick={() => {
            setState(true);
          }}
        >
          Pagar
        </button>
        <button
          className="btn btn-outline-danger text-center m-1 p-1"
          onClick={() => {
            vaciarCarrito();
          }}
        >
          Vaciar carrito
        </button>
      </div>
      {state === true ? <CheckOut finalPrice={finalPriceOrder} /> : <></>}
    </>
  );
}

export default Cart;
