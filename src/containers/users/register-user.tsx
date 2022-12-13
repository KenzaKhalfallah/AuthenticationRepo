import { Button, Grid } from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiRegister from "../../api/api.registerUser";
import CustomBody from "../../components/body-custom/custom-body";
import CustomTextField from "../../components/custom-text-field/custom-text-field";
import CustomMainForm from "../../components/form/custom-main-form";
import { RegisterUserFormValues } from "../../models/RegisterUser";

function Register() {
  const [registerUser, setRegisterUser] = useState<RegisterUserFormValues>(
    new RegisterUserFormValues()
  );
  const navigate = useNavigate();

  function changeValueRegisterUser(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    const { value, name } = event.target;
    setRegisterUser({ ...registerUser, [name]: value });
  }

  function handleSubmit(event: React.FocusEvent<HTMLFormElement>) {
    event.preventDefault();
    apiRegister.register(registerUser);
    navigate("/SignIn");
    //console.log(registerUser);
  }

  return (
    <React.Fragment>
      <CustomBody>
        <CustomMainForm title={"Create New Account"}>
          <form onSubmit={handleSubmit}>
            <React.Fragment>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <CustomTextField
                    value={registerUser.userName}
                    onChange={(event) => changeValueRegisterUser(event)}
                    required
                    name="userName"
                    label="User name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField
                    value={registerUser.email}
                    onChange={(event) => changeValueRegisterUser(event)}
                    required
                    name="email"
                    label="Email Address"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    value={registerUser.password}
                    onChange={(event) => changeValueRegisterUser(event)}
                    required
                    name="password"
                    type="password"
                    label="Password"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    value={registerUser.phoneNumber}
                    onChange={(event) => changeValueRegisterUser(event)}
                    required
                    name="phoneNumber"
                    type="number"
                    label="Phone Number"
                  />
                </Grid>
                <Grid item xs={12}>
                  <a href="/">Sign In If you already have an account</a>
                </Grid>
              </Grid>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button type={"submit"} variant="contained" color={"primary"}>
                  Sign Up
                </Button>
              </div>
            </React.Fragment>
          </form>
        </CustomMainForm>
      </CustomBody>
    </React.Fragment>
  );
}

export default Register;
