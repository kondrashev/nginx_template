import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

import { IUser } from '../../../constants/constants';
import { useAppSelector } from '../../hooks/hooks';

const User: FC = () => {
  const user: IUser = useAppSelector((state) => state.usersReducer.user);
  return (
    <Box>
      <Typography>{user.login}</Typography>
    </Box>
  );
};

export default User;
