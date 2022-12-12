export interface RegisterUser {
  userName: string;
  email: string;
  password: string;
  phoneNumber: string;
}

export class RegisterUser implements RegisterUser {
  constructor(init?: RegisterUserFormValues) {
    Object.assign(this, init);
  }
}

export class RegisterUserFormValues {
  userName: string = "";
  email: string = "";
  password: string = "";
  phoneNumber: string = "";

  constructor(RegisterUser?: RegisterUserFormValues) {
    if (RegisterUser) {
      this.userName = RegisterUser.userName;
      this.email = RegisterUser.email;
      this.password = RegisterUser.password;
      this.phoneNumber = RegisterUser.phoneNumber;
    }
  }
}
