import React from "react";
import "./index.css";

const Registration = ({
  name,
  city,
  email,
  password,
  handlerName,
  handlerCity,
  handlerEmail,
  handlerPassword,
  onSubmitForm,
}) => {
  const checkPass = (pass) => {
    const valid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (valid.test(pass)) {
      return true;
    } else {
      return false;
    }
  };

  const checkEmail = (email) => {
    const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (validEmail.test(email)) return true;
  };

  const validForm = () => {
    return checkEmail(email) && checkPass(password);
  };

  return (
    <form className="form">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(event) => handlerName(event)}
      />
      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        name="city"
        value={city}
        onChange={(event) => handlerCity(event)}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(event) => handlerEmail(event)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(event) => handlerPassword(event)}
      />
      {validForm() ? (
        <button type="submit" onClick={onSubmitForm}>
          Submit
        </button>
      ) : (
        <div>No validation</div>
      )}
    </form>
  );
};

export default Registration;
