import { Button, Grid } from "@material-ui/core";
import React, { useState } from "react";
import apiReset from "../../api/api.reset";
import CustomBody from "../../components/body-custom/custom-body";
import CustomTextField from "../../components/custom-text-field/custom-text-field";
import CustomMainForm from "../../components/form/custom-main-form";
import { ResetFormValues } from "../../models/Reset";

function Reset() {
  const [reset, setReset] = useState<ResetFormValues>(new ResetFormValues());

  function changeValueReset(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    const { value, name } = event.target;
    setReset({ ...reset, [name]: value });
  }

  function handleSubmit(event: React.FocusEvent<HTMLFormElement>) {
    event.preventDefault();
    apiReset.reset(reset);
    //console.log(signIn);
  }

  return (
    <React.Fragment>
      <CustomBody>
        <CustomMainForm title={"Reset Password"}>
          <form onSubmit={handleSubmit}>
            <React.Fragment>
              <Grid item xs={12}>
                <a href="/Register">Sign Up If you dont have an account</a>
              </Grid>
              <br></br>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <CustomTextField
                    value={reset.userName}
                    onChange={(event) => changeValueReset(event)}
                    required
                    name="userName"
                    label="User name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    value={reset.newPassword}
                    onChange={(event) => changeValueReset(event)}
                    required
                    name="newPassword"
                    type="password"
                    label="newPassword"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    value={reset.confirmNewPassword}
                    onChange={(event) => changeValueReset(event)}
                    required
                    name="confirmNewPassword"
                    type="password"
                    label="confirmNewPassword"
                  />
                </Grid>
                <Grid item xs={12}>
                  <a href="/">Sign In</a>
                </Grid>
              </Grid>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button type={"submit"} variant="contained" color={"primary"}>
                  Reset
                </Button>
              </div>
            </React.Fragment>
          </form>
        </CustomMainForm>
      </CustomBody>
    </React.Fragment>
  );
}

export default Reset;
