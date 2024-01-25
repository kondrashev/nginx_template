export interface IUser {
  id?: number;
  login: string;
  role?: string;
  password: string;
  token?: string;
  registration?: boolean;
  createdAt?: string;
  updatedAt?: string;
  avatar?: string;
}
