import { FC } from "react";
import { iInput } from "../../interfaces";
import StyledInput from "./style";

const Input: FC<iInput> = ({ title, type, id, register, ...rest }) => {
  return (
    <StyledInput>
      <label htmlFor={id}>{title}</label>
      <input type={type} id={id} {...register(id)} {...rest} />
    </StyledInput>
  );
};

export default Input;
