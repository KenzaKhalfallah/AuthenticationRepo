import React from "react";
import themeMui from "../../themes/theme-mui";
import { MuiThemeProvider } from "@material-ui/core";
import Dashboard from "../../components/dashboard/dashboard";
import Register from "../users/register-user";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListUsers from "../users/list-users";
import SignIn from "../users/signin-user";
import Reset from "../users/reset-user";

function App() {
  return (
    <MuiThemeProvider theme={themeMui}>
      <Dashboard>
        <Router>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/Reset" element={<Reset />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/SignIn/ListUsers" element={<ListUsers />} />
          </Routes>
        </Router>
      </Dashboard>

      {/*<Router>
        <Routes>
            <Register />
            <ListUsers />
        </Routes>
  </Router>*/}
    </MuiThemeProvider>
  );
}

export default App;
