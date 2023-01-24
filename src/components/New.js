import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  } else if (!values.password) {
    errors.email = "Required";
  }

  return errors;
};

export default function App() {
  const [refresh, setRefresh] = useState("");
  const [access, setAccess] = useState("");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      axios
        .post("http://api-cbns.merakitechs.com/api/v1/user-app/login", values)
        .then((response) => console.log(response.data.tokens));
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <span>{formik.errors.email}</span>
          )}

          <label>Password</label>
          <input
            type="text"
            name="password"
            id="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <span>{formik.errors.password}</span>
          )}
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
