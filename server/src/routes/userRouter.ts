import { Router } from 'express';

import endpoints from '../../constants/endpoints';
import errorHandler from '../middleware/ErrorHandlingMiddleware';
import UserValidator from '../validators/index';
const router = Router();
import UserController from '../controllers/userController';
import checkRole from '../middleware/checkRoleMiddleware';
/**
 * @swagger
 * /check:
 *  post:
 *   tags:
 *   - User
 *   summary: Check authorization
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/CheckUserRequest'
 *   responses:
 *    200:
 *     description: Success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/CheckUserResponse'
 */
router.post(endpoints.checkAuthorization, UserController.checkAuthorisation);
/**
 * @swagger
 * /get/users:
 *  get:
 *   tags:
 *   - User
 *   summary: A list of users with role 'author'
 *   responses:
 *    200:
 *     description: Success
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/components/ListUsersResponse'
 */
router.get(endpoints.getUsers, UserController.getUsers);
/**
 * @swagger
 * /add/user:
 *  post:
 *   tags:
 *   - User
 *   summary: Create a new user
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/CreateUserRequest'
 *   responses:
 *    200:
 *     description: Success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/CreateUserResponse'
 */
router.post(endpoints.addUser, UserValidator.checkAddUser(), errorHandler, UserController.addUser);
/**
 * @swagger
 * /delete/users:
 *  post:
 *   security:
 *    - bearerAuth: []
 *   parameters:
 *    - name: auth
 *      in: header
 *      description: An authorization header
 *      required: true
 *      type: string
 *   tags:
 *   - User
 *   summary: Delete users
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/DeleteUsersRequest'
 *   responses:
 *    200:
 *     description: Success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/DeleteUsersResponse'
 */
router.post(endpoints.deleteUsers, checkRole('ADMIN'), UserController.deleteUsers);
/**
 * @swagger
 * /upload/file:
 *  post:
 *   security:
 *    - bearerAuth: []
 *   parameters:
 *    - name: auth
 *      in: header
 *      description: An authorization header
 *      required: true
 *      type: string
 *   tags:
 *   - User
 *   summary: Upload avatar
 *   requestBody:
 *    required: true
 *    content:
 *     multipart/form-data:
 *      schema:
 *       $ref: '#/components/UploadAvatar'
 *   responses:
 *    200:
 *     description: Success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/ListUsers'
 */
router.post(endpoints.uploadFile, checkRole('USER'), UserController.uploadFile);
export default router;
