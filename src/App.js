import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Buy from "./components/Buy";
import Sell from "./components/Sell";
import Stock from "./components/Stock";
import New from "./components/New";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/buy" component={Buy} />
        <Route path="/new" component={New} />
        <Route path="/sell" component={Sell} />
        <Route path="/stock" component={Stock} />
      </BrowserRouter>
    </div>
  );
}

export default App;
