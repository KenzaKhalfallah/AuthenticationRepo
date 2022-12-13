import { Button, Grid } from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiSignIn from "../../api/api.signIn";
import CustomBody from "../../components/body-custom/custom-body";
import CustomTextField from "../../components/custom-text-field/custom-text-field";
import CustomMainForm from "../../components/form/custom-main-form";
import { SignInFormValues } from "../../models/SignIn";

function SignIn() {
  const [signIn, setSignIn] = useState<SignInFormValues>(
    new SignInFormValues()
  );
  const navigate = useNavigate();

  function changeValueSignIn(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    const { value, name } = event.target;
    setSignIn({ ...signIn, [name]: value });
  }

  function handleSubmit(event: React.FocusEvent<HTMLFormElement>) {
    event.preventDefault();
    apiSignIn.signin(signIn);
    navigate("/SignIn/ListUsers", { replace: true });
    //console.log(signIn);
  }

  return (
    <React.Fragment>
      <CustomBody>
        <CustomMainForm title={"Sign In"}>
          <form onSubmit={handleSubmit}>
            <React.Fragment>
              <Grid item xs={12}>
                <a href="/Register">Sign Up If you dont have an account</a>
              </Grid>
              <br></br>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <CustomTextField
                    value={signIn.userName}
                    onChange={(event) => changeValueSignIn(event)}
                    required
                    name="userName"
                    label="User name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    value={signIn.password}
                    onChange={(event) => changeValueSignIn(event)}
                    required
                    name="password"
                    type="password"
                    label="Password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <a href="/Reset">Reset Password</a>
                </Grid>
              </Grid>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button type={"submit"} variant="contained" color={"primary"}>
                  Sign In
                </Button>
              </div>
            </React.Fragment>
          </form>
        </CustomMainForm>
      </CustomBody>
    </React.Fragment>
  );
}

export default SignIn;
