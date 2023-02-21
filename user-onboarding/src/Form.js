import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

// const schema = yup.object().shape({
//   first_name: yup
//     .string()
//     .required("first name is required")
//     .min(6, "the min chars for first name is 6"),
//   last_name: yup
//     .string()
//     .required("last name is required")
//     .min(6, "the min chars for last name is 6"),
//   password: yup
//     .string()
//     .required("password is required")
//     .min(15, "your password must be 15 chars long"),
//   email: yup.string().required("email is required"),
//   terms: yup
//     .boolean()
//     .oneOf([true], "you must agree to the terms of service!!!!"),
// });

const Form = (props) => {
  const { formValues, formErrors, change, onSubmit, disabled } = props;

  // const initialFormValues = {
  //   first_name: "",
  //   last_name: "",
  //   email: "",
  //   password: "",
  //   terms: false,
  // };
  // const initialFormErrors = {
  //   first_name: "",
  //   last_name: "",
  //   email: "",
  //   password: "",
  //   terms: "",
  // };

  // const [formValues, setFormValues] = useState(initialFormValues);
  // const [disabled, setDisabled] = useState(true);
  // const [formErrors, setFormErrors] = useState(initialFormErrors);
  // const [users, setUsers] = useState([]);

  // const setFormErrorsFunc = (name, value) => {
  //   yup
  //     .reach(schema, name)
  //     .validate(value)
  //     .then(() => {
  //       setFormErrors({ ...formErrors, [name]: "" });
  //     })
  //     .catch((err) => {
  //       setFormErrors({ ...formErrors, [name]: err.errors[0] });
  //     });
  // };

  // const change = (event) => {
  //   const { name, value, type, checked } = event.target;
  //   const valueToUse = type === "checkbox" ? checked : value;
  //   setFormErrorsFunc(name, valueToUse);
  //   setFormValues({ ...formValues, [name]: valueToUse });
  // };

  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   axios.post("https://reqres.in/api/users", formValues).then((res) => {
  //     setUsers([res.data, ...users]);
  //   });
  // };

  // useEffect(() => {
  //   schema.isValid(formValues).then((valid) => {
  //     setDisabled(!valid);
  //   });
  // }, [formValues]);

  return (
    <div>
      <div>
        <h1>{formErrors.first_name}</h1>
        <h1>{formErrors.last_name}</h1>
        <h1>{formErrors.email}</h1>
        <h1>{formErrors.password}</h1>
        <h1>{formErrors.terms}</h1>
      </div>
      <form onSubmit={onSubmit}>
        <label>
          First Name
          <input
            type="text"
            name="first_name"
            onChange={change}
            value={formValues.first_name}
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            name="last_name"
            onChange={change}
            value={formValues.last_name}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            onChange={change}
            value={formValues.email}
          />
        </label>
        <label>
          Create Password
          <input
            type="text"
            name="password"
            onChange={change}
            value={formValues.password}
          />
        </label>
        <label>
          Terms Of Service
          <input
            type="checkbox"
            name="terms"
            onChange={change}
            checked={formValues.terms}
          />
        </label>
        <button disabled={disabled}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
