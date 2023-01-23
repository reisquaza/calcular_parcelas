import { iCalculate } from "../interfaces";
import api from "./api";

const ApiCalculate = (data: iCalculate) => {
  const response = api.post("/", data).then(res => res);

  return response;
};

export default ApiCalculate;

