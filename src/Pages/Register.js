import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [disable, setDisable] = useState(false);
  const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};

      if (!values.name) {
        errors.name = "please enter name";
      }

      if (!values.email) {
        errors.email = "please enter eamil";
      }

      if (!values.password) {
        errors.password = "please enter password";
      }

      return errors;
    },
    onSubmit: async (values) => {
      setDisable(true);
      await axios.post(
        "https://deliveryapp-8sot.onrender.com/register",
        values
      );
      alert("successfully registered");
      nav("/");
    },
  });
  return (
    <div className="main-container">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Name</label>
          <br></br>
          <input
            onChange={formik.handleChange}
            name="name"
            value={formik.values.name}
            type={"text"}
          ></input>
          <span>{formik.errors.name}</span>
          <br></br>
          <label>Email</label>
          <br></br>
          <input
            onChange={formik.handleChange}
            name="email"
            value={formik.values.email}
            type={"email"}
          ></input>
          <span>{formik.errors.email}</span>
          <br></br>
          <label>Password</label>
          <br></br>
          <input
            onChange={formik.handleChange}
            name="password"
            value={formik.values.password}
            type={"password"}
          ></input>
          <span>{formik.errors.password}</span>
          <br></br>
          <input disabled={disable} type={"submit"} value="Submit"></input>
          <br></br>
        </div>
      </form>
    </div>
  );
}

export default Register;
