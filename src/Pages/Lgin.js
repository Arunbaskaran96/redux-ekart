import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Lgin() {
  const nav = useNavigate();
  const [disable, setDisable] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "Please enter email";
      }

      if (!values.password) {
        errors.password = "Please enter password";
      }

      return errors;
    },
    onSubmit: async (values) => {
      setDisable(true);
      const login = await axios.post(
        "https://deliveryapp-8sot.onrender.com/login",
        values
      );
      window.localStorage.setItem("token", login.data.token);
      nav("/portal/home");
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="main-container">
          <label>Email</label>
          <br></br>
          <input
            onChange={formik.handleChange}
            value={formik.values.email}
            name="email"
            type="email"
          ></input>
          <br></br>
          <label>Password</label>
          <br></br>
          <input
            onChange={formik.handleChange}
            value={formik.values.password}
            name="password"
            type="password"
          ></input>
          <br></br>
          <input disabled={disable} type="submit" value="Submit"></input>
        </div>
      </form>
      <Link to="/register">Register</Link>
    </div>
  );
}

export default Lgin;
