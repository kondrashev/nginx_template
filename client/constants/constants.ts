export const API_BASE_URL = process.env.env === 'development' ? 'http://localhost:3000' : 'api';

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
