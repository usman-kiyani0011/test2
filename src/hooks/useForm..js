import React, { useState } from "react";
import { omit } from "lodash";

const useForm = (callback) => {
  //Form values
  const [values, setValues] = useState({});
  //Errors
  const [errors, setErrors] = useState({});

  const validate = (event, name, value) => {
    //A function to validate each input values

    switch (name) {
      case "name":
        if (value.length <= 2) {
          // we will set the error state

          setErrors({
            ...errors,
            name: "name atleast have 3 letters",
          });
        } else {
          //omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, "username");
          setErrors(newObj);
        }
        break;

      case "quantity":
        if (value.length <= 1) {
          // we will set the error state

          setErrors({
            ...errors,
            quantity: "emter quantity",
          });
        } else {
          //omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, "username");
          setErrors(newObj);
        }
        break;
      case "price":
        if (value.length <= 1) {
          // we will set the error state

          setErrors({
            ...errors,
            quantity: "emter price",
          });
        } else {
          //omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, "username");
          setErrors(newObj);
        }
        break;
      default:
        break;
    }
  };

  //A method to handle form inputs
  const handleChange = (event) => {
    //To stop default events
    event.persist();

    let name = event.target.name;
    let val = event.target.value;

    validate(event, name, val);
    //Let's set these values in state

    setValues({
      ...values,
      [name]: val,
    });
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();

    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      callback();
    } else {
      alert("There is an Error!");
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
