import { iCalculate } from "../interfaces";
import api from "./api";

const ApiCalculate = (data: iCalculate) => {
  const response = api.post("/", data);

  return response;
};

export default ApiCalculate;

