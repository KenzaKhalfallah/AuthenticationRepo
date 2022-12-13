import { ResetFormValues } from "../models/Reset";
import request from "./api";

const apiReset = {
  reset: (data: ResetFormValues) => request.post("/Reset-Password", data),
};

export default apiReset;
