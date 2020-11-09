import React from "react";
import "./App.css";

function ProductDispaly(props) {
  return (
    <div className="product">
      <div className="photo">70*110</div>
      <p> {props.name} </p>
      <p>Item Price: ${props.price} </p>
      <button
        className="btn btn-primary"
        style={{ marginBottom: "5px" }}
        onClick={() => alert(`${props.name} selected`)}
      >
        View Details
      </button>
      <button
        className="btn btn-warning"
        onClick={() => alert(`${props.name} Removed`)}
      >
        Remove Item
      </button>
    </div>
  );
}

export default ProductDispaly;
