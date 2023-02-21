import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import Form from "./Form";

const schema = yup.object().shape({
  first_name: yup
    .string()
    .required("first name is required")
    .min(6, "the min chars for first name is 6"),
  last_name: yup
    .string()
    .required("last name is required")
    .min(6, "the min chars for last name is 6"),
  password: yup
    .string()
    .required("password is required")
    .min(15, "your password must be 15 chars long"),
  email: yup.string().required("email is required"),
  terms: yup
    .boolean()
    .oneOf([true], "you must agree to the terms of service!!!!"),
});

function App() {
  const initialFormValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    terms: false,
  };
  const initialFormErrors = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    terms: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(true);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState([]);

  const setFormErrorsFunc = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
  };

  const change = (event) => {
    const { name, value, type, checked } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    setFormErrorsFunc(name, valueToUse);
    setFormValues({ ...formValues, [name]: valueToUse });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    axios.post("https://reqres.in/api/users", formValues).then((res) => {
      setUsers([res.data, ...users]);
      console.log(res.data);
    });
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div>
      <Form
        formValues={formValues}
        disabled={disabled}
        formErrors={formErrors}
        users={users}
        onSubmit={onSubmit}
        change={change}
      />
      <div>
        {users.map((user) => {
          return (
            <div>
              <h3>{user.email}</h3>
              <h6>{user.id}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
