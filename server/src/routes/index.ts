import { Router } from 'express';

import endpoints from '../../constants/endpoints';
import userRouter from '../routes/userRouter';
// eslint-disable-next-line new-cap
const router = Router();
router.use(endpoints.userRouter, userRouter);
export default router;
