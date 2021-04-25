export class LoginAttempt {
  username!: string;
  password!: string;

  constructor(un: string, pw: string) {
    this.username = un;
    this.password = pw;
  }
}
