import React, { useState } from "react";
import firebase, { db } from "../firebase/firebase";
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
  const [emailCheck, setemailCheck] = useState(false);
  let nameAndLastName;
  let tel;

  let email = "";
  let reEmail = "";

  const emailVerification = () => {
    if (email === reEmail) {
      setemailCheck(true);
    } else {
      alert("Los email no son iguales");
    }
  };

  const purchaseToDb = () => {
    let data = {
      name: nameAndLastName,
      cel: tel,
      email: email,
    };
    console.log(data);
    addDoc(collection(db, "orders"), { data });
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
            nameAndLastName = e.target.value;
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
              tel = e.target.value;
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
              email = e.target.value;
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
              reEmail = e.target.value;
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
    </div>
  );
}

export default CheckOut;
