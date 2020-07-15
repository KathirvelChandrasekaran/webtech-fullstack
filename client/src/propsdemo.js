import React, { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";

const PropD = ({ k }) => {
  const [name, setName] = useState([]);

  useEffect(()=> {
      getName();
  })
  const getName = async() => {
      const data = await fetch('http://localhost:5000/api/show');
      const names = await data.json();
      setName(names);
  }
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (inputData) => {
      axios
        .post("http://localhost:5000/api/add", inputData)
        .then((res) => {
          console.log(res.data.name);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <div>
      <h1>Props</h1>
      <h2>{k}</h2>

      <form onSubmit={formik.handleSubmit}>
        <input type="text" name="name" onChange={formik.handleChange}></input>
        <br />
        <button>Submit</button>
      </form>

      <span>{JSON.stringify(name)}</span>
    </div>
  );
};

export default PropD;
