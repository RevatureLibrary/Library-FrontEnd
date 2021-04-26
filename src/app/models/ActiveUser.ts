export class ActiveUser {
  id!: number;
  username!: string;
  role!: string;
  firstName!: string;
  lastName!: string;
  email!: string;
  token?: string;
  password?: string;
}

//pgonz: changed email from email?: to email!: