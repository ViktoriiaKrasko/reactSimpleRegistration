import React, { useState } from "react";
import Registration from "../Registration";
import Account from "../Account";
import "./index.css";

const Home = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [acc, setAcc] = useState(false);

  const handlerName = (e) => {
    setName(e.target.value);
  };

  const handlerCity = (e) => {
    setCity(e.target.value);
  };

  const handlerEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlerPassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitForm = () => {
    setAcc(true);
  };

  return (
    <>
      {acc ? (
        <Account name={name} city={city} email={email} />
      ) : (
        <Registration
          name={name}
          city={city}
          email={email}
          password={password}
          handlerName={handlerName}
          handlerCity={handlerCity}
          handlerEmail={handlerEmail}
          handlerPassword={handlerPassword}
          onSubmitForm={onSubmitForm}
        />
      )}
    </>
  );
};

export default Home;
