import React, { useState } from "react";
import Home from "./Home";
import { useDispatch, useSelector } from "react-redux";
import { buyProduct } from "../actions/index";

export default function Buy() {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();
  const buyDetails = useSelector((state) => state.buyReducer.buyDetails);

  const handleBuy = () => {
    dispatch(buyProduct(text, number));

    setText("");
    setNumber("");
  };
  return (
    <div>
      <Home />
      <hr />
      <div className="App-header">
        <br />
        <label> product name</label>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <br />
        <label> Product Quaantity</label>
        <input
          type="number"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
        />
        <br />
        <button onClick={handleBuy}>Buy</button>

        <h3>Buy Items</h3>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {buyDetails.map((item) => {
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
