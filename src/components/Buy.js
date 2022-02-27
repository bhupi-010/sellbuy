import React, { useState } from "react";
import Home from "./Home";
import { useDispatch, useSelector } from "react-redux";
import { buyProduct, deleteProduct } from "../actions/index";

export default function Buy() {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");
  let sn = 0;

  const dispatch = useDispatch();
  const buyDetails = useSelector((state) => state.buyReducer.buyDetails);

  const handleBuy = () => {
    if (text.trim() === "" || number.trim() === "" || number <= 0) {
      alert("Please enter valid values");
    } else {
      dispatch(buyProduct(text, number));

      setText("");
      setNumber("");
    }
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
              <th>S.N</th>
              <th>Product</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {buyDetails.map((item) => {
              const handleDelete = () => {
                dispatch(deleteProduct(item));
              };

              const handleEdit = () => {
                dispatch(deleteProduct(item));
                setText(item.product);
                setNumber(item.quantity);
              };
              sn++;
              return (
                <tr key={item.id}>
                  <td>{sn}</td>
                  <td>{item.product}</td>
                  <td>{item.quantity}</td>
                  <button onClick={handleDelete}>Delete</button>

                  <button>
                    <i onClick={handleEdit}>Edit</i>
                  </button>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
