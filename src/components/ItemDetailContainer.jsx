import React, { useState } from "react";
import { useCartContext } from "../context/cartContext";

function ItemDetailContainer() {
  const [productQty, setProductQty] = useState(0);
  let product = JSON.parse(localStorage.getItem("itemDetail"));
  const { agregarItem } = useCartContext();

  return (
    <div className="conatiner border border-info m-2  w-50">
      <div className="card border border-dark m-1 d-flex justify-content-center">
        <h1>{product.name}</h1>
        <img src={product.img} alt="" className="w-25 text-center" />
        <p>{product.description}</p>
        <h2>{product.price} $</h2>
        <div className="conatiner m-1 p-1 d-flex justify-content-center border border-dark">
          <button
            className="m-1"
            onClick={() => {
              productQty === 0
                ? alert("NO Se puede restar productos")
                : setProductQty(productQty - 1);
            }}
          >
            -
          </button>
          <p className="text-center">{productQty}</p>
          <button
            className="m-1"
            onClick={() => {
              if (product.stock === productQty) {
                alert("El stock de este producto es de: " + product.stock);
              } else {
                setProductQty(productQty + 1);
              }
            }}
          >
            +
          </button>
        </div>

        <button
          className="btn btn-outline-success"
          onClick={() => {
            agregarItem(product, productQty);
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
