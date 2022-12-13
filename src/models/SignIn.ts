export interface SignIn {
  userName: string;
  password: string;
}

export class SignIn implements SignIn {
  constructor(init?: SignInFormValues) {
    Object.assign(this, init);
  }
}

export class SignInFormValues {
  userName: string = "";
  password: string = "";

  constructor(SignIn?: SignInFormValues) {
    if (SignIn) {
      this.userName = SignIn.userName;
      this.password = SignIn.password;
    }
  }
}
