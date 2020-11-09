import React, { Component, Fragment } from "react";
import ProductDisplay from "./ProductDispaly";

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [
        { id: 1, name: "Item One", price: "20" },
        { id: 2, name: "Item Two", price: "30" },
        { id: 3, name: "Item Three", price: "40" }
      ]
    };
  }

  render() {
    return (
      <Fragment>
        <button>Add Product</button>
        <div className="App">
          {this.state.product.map(product => (
            <ProductDisplay name={product.name} price={product.price} />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default ProductList;
