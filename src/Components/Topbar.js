import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Topbar.css";

function Topbar() {
  const cart = useSelector((state) => state.Cart.items);
  const nav = useNavigate();

  return (
    <nav class="navbar navbar-dark bg-dark fixed-top ">
      <div class="container-fluid ">
        <Link class="navbar-brand" to="/home">
          <img
            src="data:image/png;base64,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"
            alt=""
            width="30"
            height="24"
            class="d-inline-block align-text-top"
            href="pizza=img"
          />
          Bootstrap
        </Link>
        <ul className="pages-list">
          <li>
            <Link to="/portal/home">Home</Link>
          </li>
          <li>
            <Link to="/portal/cart">
              {cart.length > 0 ? `Cart-${cart.length}` : "Cart"}
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                window.localStorage.removeItem("token");
                nav("/");
              }}
              className="btn btn-danger btn-sm"
            >
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Topbar;
