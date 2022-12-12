import { RegisterUserFormValues } from "../models/RegisterUser";
import request from "./api";

const apiRegister = {
  register: (data: RegisterUserFormValues) =>
    request.post("/Registration", data),
};

export default apiRegister;
