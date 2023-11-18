import React from "react";

const Account = ({ name, city, email }) => {
  return (
    <div>
      <p>name: {name}</p>
      <p>city: {city}</p>
      <p>email: {email}</p>
    </div>
  );
};

export default Account;
