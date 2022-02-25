import React from "react";
import Home from "./Home";
import { useSelector } from "react-redux";

export default function Stock() {
  const products = useSelector((state) => state.buyReducer.products);
  return (
    <div>
      <Home />
      <div className="App-header">
        <h1>Stock Available</h1>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => {
              return (
                <tr>
                  <td>{item.product}</td>
                  <td>{item.quantity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
