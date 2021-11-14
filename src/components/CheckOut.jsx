import React, { useEffect, useState } from "react";
import firebase, { db } from "../firebase/firebase";
import { useCartContext } from "../context/cartContext";

import {
  collection,
  getDocs,
  getDoc,
  query,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

function CheckOut({ finalPrice }) {
  const { cartList } = useCartContext();
  const [orderId, setOrderId] = useState();
  const [emailCheck, setemailCheck] = useState(false);
  const [orderState, setorderState] = useState(false);
  const [name, setname] = useState();
  const [tel, settel] = useState();
  const [email, setemail] = useState();
  const [reEmail, setreEmail] = useState();

  const emailVerification = () => {
    console.log(email);
    console.log(reEmail);
    if (email === reEmail) {
      setemailCheck(true);
    } else {
      alert("Los email no son iguales");
    }
  };

  const purchaseToDb = (e) => {
    e.preventDefault();
    let data = {
      name: name,
      cel: tel,
      email: email,
      products: cartList,
    };
    addDoc(collection(db, "orders"), { data }).then((docRef) => {
      setOrderId(docRef.id);
      setorderState(true);
    });
  };

  return (
    <div className="conatiner border border-dark m-1 p-1 text-center">
      <h1 className="border-bottom border-dark border-4">CheckOut </h1>
      <div className="mb-3">
        <label for="formGroupExampleInput" className="form-label">
          Nombre y Apellido
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Example input placeholder"
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
      </div>
      <div className="conatiner m-1 p-2">
        <div className="mb-3">
          <label for="formGroupExampleInput2" className="form-label">
            Telefono
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Another input placeholder"
            onChange={(e) => {
              settel(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput2" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Another input placeholder"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput2" className="form-label">
            Repetir Email
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Another input placeholder"
            onChange={(e) => {
              setreEmail(e.target.value);
            }}
          />
        </div>
        <button className="btn btn-outline-info" onClick={emailVerification}>
          Confirmar datos
        </button>
      </div>
      {emailCheck === true ? (
        <button className="btn btn-outline-success" onClick={purchaseToDb}>
          {" "}
          Finalizar compra
        </button>
      ) : (
        <></>
      )}
      {orderState === true ? <h3>Su id de compra es: {orderId}</h3> : <></>}
    </div>
  );
}

export default CheckOut;
