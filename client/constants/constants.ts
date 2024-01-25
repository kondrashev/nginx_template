export const API_BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'server';
// export const API_BASE_URL = 'http://localhost:3000';

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
