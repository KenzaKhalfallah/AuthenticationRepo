import { User } from "../models/user";
import request from "./api";

const apiUsers = {
  list: () => request.get<User[]>("/Get-All-Users"),
};

export default apiUsers;
