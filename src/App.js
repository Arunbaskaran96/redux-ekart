import "./App.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Lgin from "./Pages/Lgin";
import Portal from "./Components/Portal";
import Register from "./Pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lgin />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/portal" element={<Portal />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="cart" element={<Cart />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
