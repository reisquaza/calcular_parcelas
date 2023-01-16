import React from "react";
import { iInput } from "../../interfaces";

const Input = ({ name, type }: iInput) => {
  return (
    <>
      <label>{name}</label>
      <input type={type} />
    </>
  );
};

export default Input;
