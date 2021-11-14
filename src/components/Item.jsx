import React from "react";
import { Link } from "react-router-dom";
function Item({ dataProduct }) {
  return (
    <>
      {dataProduct.map((dataItem) => {
        return (
          <div className="card-header text-center w-25 border border-dark m-1">
            {dataItem.name}
            <div className="card-body text-center">
              <img src={dataItem.img} alt="foto" className="img-thumbnail" />
            </div>
            <div className="card-footer text-center">
              <Link to={`/detalle/${dataItem.id}`}>
                <button
                  className="btn btn-outline-info"
                  onClick={() => {
                    localStorage.removeItem("ItemDetail");
                    localStorage.setItem(
                      "itemDetail",
                      JSON.stringify(dataItem)
                    );
                  }}
                >
                  {" "}
                  Detail
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Item;
