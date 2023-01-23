import { FieldValues, UseFormRegister } from "react-hook-form";


export interface iInput {
  title: string;
  id: string;
  type?: string;
  register: UseFormRegister<FieldValues>;
}

export interface iCalculate {
  amount?: string;
  installments?: string;
  mdr?: string;
}