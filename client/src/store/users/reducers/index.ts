import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser } from '../../../../constants/constants';
import { checkAuthorization, deleteUsers, getUsers, upLoadFile } from '../actions/actions';

interface userState {
  loading: boolean;
  error: string;
  user: IUser;
  users: IUser[];
}

const initialState: userState = {
  loading: false,
  error: '',
  user: { id: 0, avatar: 'A', login: 'none', password: '', role: 'AUTHOR' },
  users: [],
};

const usersReducer = createSlice({
  name: 'usersReducer',
  initialState,
  reducers: {},
  extraReducers: {
    [checkAuthorization.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.loading = false;
      state.error = '';
    },
    [checkAuthorization.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [checkAuthorization.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.users = action.payload;
      state.loading = false;
      state.error = '';
    },
    [getUsers.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [getUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    [deleteUsers.fulfilled.type]: (state, action: PayloadAction<number[]>) => {
      state.users = state.users.filter((user) => !action.payload.includes(user.id));
      state.loading = false;
      state.error = '';
    },
    [deleteUsers.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [deleteUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    [upLoadFile.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.loading = false;
      state.error = '';
    },
    [upLoadFile.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [upLoadFile.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
}).reducer;

export default usersReducer;
