import React from "react";
import { Route } from "react-router-dom";
import ListUsers from "../../users/list-users";
import Register from "../../users/register-user";
import Reset from "../../users/reset-user";
import SignIn from "../../users/signin-user";

function UserRouter() {
  return (
    <React.Fragment>
      <Route path="/SignIn/ListUsers" element={<ListUsers />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/" element={<SignIn />} />
      <Route path="/Reset" element={<Reset />} />
      <Route path="/SignIn/edit" element={<Register />} />
      <Route path="/SignIn/edit/changePwd" element={<Register />} />
      <Route path="/ResetPwd" element={<Register />} />
    </React.Fragment>
  );
}

export default UserRouter;
