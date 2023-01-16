import React from "react";

interface iInput {
  name: string;
  type?: string;
}

const Input = ({ name, type }: iInput) => {
  return (
    <>
      <label>{name}</label>
      <input type={type} />
    </>
  );
};

export default Input;
