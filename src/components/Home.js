import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="App-header">
        <h1>Buy-Sale Products</h1>
        <table>
          <tbody>
            <tr>
              <td>
                <button className="button">
                  <Link to="/buy" className="link">
                    Buy
                  </Link>
                </button>
              </td>
              <td>
                <button className="button">
                  <Link to="/sell" className="link">
                    Sell
                  </Link>
                </button>
              </td>
              <td>
                <button className="button">
                  <Link to="/stock" className="link">
                    Stock
                  </Link>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
