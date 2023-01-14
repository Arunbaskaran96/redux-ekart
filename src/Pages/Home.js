import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "../Components/Slider";
import { addtocartitem, addtotal } from "../Redux/Reducer/CartSlice";
import { additems } from "../Redux/Reducer/ProductSlice";

function Home() {
  const [loading, setLoading] = useState(true);
  const pizza = useSelector((state) => {
    return state.Product.items;
  });

  const cartItems = useSelector((state) => state.Cart.items);
  const dispatcher = useDispatch();

  const addCart = (item) => {
    if (item) {
      dispatcher(addtocartitem(item));
      dispatcher(addtotal(item));
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const item = await axios.get(
      "https://deliveryapp-8sot.onrender.com/products",
      {
        headers: {
          Authorization: `${window.localStorage.getItem("token")}`,
        },
      }
    );
    console.log(item.data);
    dispatcher(additems(item.data));
    setLoading(false);
  };

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div className="container-fluid">
      <div className="row mt-5">
        <Slider />
      </div>
      <div className="row mt-5">
        {pizza.map((item) => {
          return (
            <div class="card cards" style={{ width: "18rem" }}>
              <img src={item.img} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <p class="card-text">{item.des}</p>
                <h5>Price-{item.price}</h5>
                <div>
                  <button
                    onClick={() => addCart(item)}
                    class="btn btn-primary"
                    disabled={cartItems.disable}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
