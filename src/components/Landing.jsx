import React, { useState } from 'react'

import "../components/Landing.css"


  const regExEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,10}/;

export default function Landing({login}) {



  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  })
  const [inputsErrors, setInputsErrors] = useState({
    email: "",
    password: "",
  })
  
  
  
  


  const validate = (inputs) => {
    const errors = {};
    if (!inputs.email) errors.email = "Email is null";
    if (inputs.email.length < 6) errors.email = "Email contain 6 characters";

    if (!regExEmail.test(inputs.email)) errors.email = "Email Will be Email";
    if (!regexPassword.test(inputs.password)) errors.password = "Password ... ";
    if (inputs.password.length < 6)
      errors.password = "Password must contain 6 characters";
    if (!inputs.password) errors.password = "Password is null";
    return errors;
  };
  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
      // email: dede
    });
    setInputsErrors(
      validate({
        ...inputs,
        [event.target.name]: event.target.value,
      })
    );
  };




  const handleSubmit = (event) => {
    event.preventDefault();
  
    const aux = Object.keys(inputsErrors)
    if (aux.length === 0) {
      setInputs({
        email: "",
        password: ""
      })
      setInputsErrors({
        email: "",
        password: ""
      })
    login(inputs)
    } else{
    return alert("Oh jeez")
  }
}
  return (
    <div className="landing">

      <h1>Bienvenidos a Rick y Morty</h1>
      <div>
        <h2>
          <form onSubmit={handleSubmit}>
            <label>E-mail:</label>
            <input
              type="text"
              name="email"
              value={inputs.email}
              onChange={handleChange}
            ></input>
          <span>{inputsErrors?.email && inputsErrors.email}</span>
          <hr></hr>
            <label>
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={inputs.password}
              onChange={handleChange}></input>
          <span>{inputsErrors?.password && inputsErrors.password}</span>
          <hr></hr>
            {
              Object.keys(inputsErrors).length === 0 ? (

                <button type="submit">Iniciar sesión</button>
             ) : null
            }

          </form>
        </h2>
      </div>





    </div>
  )
}
