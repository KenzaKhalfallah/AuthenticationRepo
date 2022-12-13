import { SignInFormValues } from "../models/SignIn";
import request from "./api";

const apiSignIn = {
  signin: (data: SignInFormValues) => request.post("/Login", data),
};

export default apiSignIn;
