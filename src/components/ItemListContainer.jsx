import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import Item from "./Item";

function ItemListContainer(e) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(e);
    async function getData() {
      if (e.match.path === "/") {
        const result = await getDocs(query(collection(db, "home")));
        result.docs.map((dataProduct) => {
          return setProducts((products) => [...products, dataProduct.data()]);
        });
      } else {
        const result = await getDocs(
          query(collection(db, e.match.params.idCategory))
        );
        result.docs.map((dataProduct) => {
          return setProducts((products) => [...products, dataProduct.data()]);
        });
      }

      setLoading(true);
    }
    getData();
  }, []);

  return (
    <div className="border border-dark m-2 d-flex">
      {loading === false ? (
        <h1>Cargando...</h1>
      ) : (
        <Item dataProduct={products} />
      )}
    </div>
  );
}

export default ItemListContainer;
