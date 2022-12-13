export interface Reset {
  userName: string;
  newPassword: string;
  confirmNewPassword: string;
}

export class Reset implements Reset {
  constructor(init?: ResetFormValues) {
    Object.assign(this, init);
  }
}

export class ResetFormValues {
  userName: string = "";
  newPassword: string = "";
  confirmNewPassword: string = "";

  constructor(Reset?: ResetFormValues) {
    if (Reset) {
      this.userName = Reset.userName;
      this.newPassword = Reset.newPassword;
      this.confirmNewPassword = Reset.confirmNewPassword;
    }
  }
}
