import { createAsyncThunk } from '@reduxjs/toolkit';

import { IUser } from '../../../../constants/constants';
import endpoints from '../../../../constants/endpoints';

export const checkAuthorization = createAsyncThunk<IUser, IUser, { rejectValue: string }>(
  'user/checkAuthorization',
  async ({ login, password, registration }, { rejectWithValue }) => {
    const response = await fetch(`${endpoints.userRouter}${!registration ? endpoints.checkAuthorization : endpoints.addUser}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ login, password }),
    });
    if (!response.ok) {
      return rejectWithValue(`Error from server №${response.status} ${response.statusText}!!!`);
    }
    const data: Promise<IUser> = response.json();
    localStorage.setItem('token', `Bearer ${(await data).token}`);
    return data;
  },
);

interface listId {
  listId: number[];
}

export const deleteUsers = createAsyncThunk<listId, listId, { rejectValue: string }>('user/deleteUsers', async (listId, { rejectWithValue }) => {
  const response = await fetch(`${endpoints.userRouter}${endpoints.deleteUsers}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: localStorage.token },
    body: JSON.stringify(listId),
  });
  if (!response.ok) {
    return rejectWithValue(`Error from server №${response.status} ${response.statusText}!!!`);
  }
  const Ids: Promise<listId> = response.json();
  return Ids;
});

export const getUsers = createAsyncThunk<IUser[]>('user/getUsers', async () => {
  const response = await fetch(`${endpoints.userRouter}${endpoints.getUsers}`);
  const users: Promise<IUser[]> = response.json();
  return users;
});

interface IData {
  login: string;
  file: Blob;
}

export const upLoadFile = createAsyncThunk<IUser, IData, { rejectValue: string }>('user/upLoadFile', async ({ login, file }, { rejectWithValue }) => {
  const formData = new FormData();
  formData.append('login', login);
  formData.append('file', file);
  const response = await fetch(`${endpoints.userRouter}${endpoints.uploadFile}`, {
    method: 'POST',
    headers: { Authorization: localStorage.token },
    body: formData,
  });
  if (!response.ok) {
    return rejectWithValue(`Error from server №${response.status} ${response.statusText}!!!`);
  }
  const user: Promise<IUser> = response.json();
  return user;
});
