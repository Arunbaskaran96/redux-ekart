import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decre,
  incre,
  removeProduct,
  subtotal,
} from "../Redux/Reducer/CartSlice";

function Cart() {
  const { items = [], total } = useSelector((state) => {
    return state.Cart;
  });
  const dispatcher = useDispatch();

  const del = (item) => {
    dispatcher(removeProduct(item));
    dispatcher(subtotal(item));
  };

  const increment = (item) => {
    dispatcher(incre(item));
  };
  const decrement = (item) => {
    dispatcher(decre(item));
  };
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-8 mt-5">
          <h4>{`cart items-${items.length}`}</h4>
          {items.length > 0 ? (
            <div className="row mt-5">
              {items.map((item) => {
                return (
                  <div className="cart-container m-2">
                    <img
                      style={{ width: "100px" }}
                      src={item.img}
                      alt="product-pics"
                    ></img>
                    <div>
                      <h5>{item.name}</h5>
                      <h6>{item.price}</h6>
                    </div>
                    <div>
                      <button
                        disabled={item.quantity > 1 ? false : true}
                        onClick={() => decrement(item)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increment(item)}>+</button>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                      <button onClick={() => del(item)}>Remove</button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p>No cart items</p>
          )}
        </div>
        <div className="col-md-4 mt-5">Total-{total}</div>
      </div>
    </div>
  );
}

export default Cart;
