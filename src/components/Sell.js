import React, { useState } from "react";
import Home from "./Home";
import { useDispatch, useSelector } from "react-redux";
import { sellProduct } from "../actions/index";

export default function Sell() {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();
  const sellDetails = useSelector((state) => state.buyReducer.sellDetails);

  const handleSell = () => {
    dispatch(sellProduct(text, number));

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
        <button onClick={handleSell}>Sell</button>

        <h3>SELL DETAILS</h3>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {sellDetails.map((item) => {
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
