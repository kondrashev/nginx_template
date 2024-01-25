import { DataTypes } from 'sequelize';

import { IUser } from '../../../constants/constants';
import connection from '../connection';

interface IUserModel extends IUser {
  hasMany;
  findOne;
  findAll;
  create;
  update;
  destroy;
}

/**
 * @swagger
 * components:
 *   CheckUserRequest:
 *    type: object
 *    properties:
 *     login:
 *      type: string
 *      description: The user's login
 *      example: pavel
 *     password:
 *      type: string
 *      description: The user's password
 *      example: 12
 *   CheckUserResponse:
 *    type: object
 *    properties:
 *     id:
 *      type: number
 *      description: The user ID.
 *      example: 1
 *     login:
 *      type: string
 *      description: The user's login
 *      example: pavel
 *     role:
 *      type: string
 *      description: The user's role with appropriate rights
 *      example: USER
 *     token:
 *      type: string
 *      description: The key access to methods
 *      example: RtlutCJjkVgRYIGizH1QIot-BBz2Yqjso
 *     avatar:
 *      type: string
 *      description: The path of user photo
 *      example: ./static/images/avatar.jpg
 *   CreateUserRequest:
 *    type: object
 *    properties:
 *     login:
 *      type: string
 *      description: The user's login
 *      example: pavel
 *     password:
 *      type: number
 *      description: The user's password
 *      example: 12
 *   CreateUserResponse:
 *    type: object
 *    properties:
 *     login:
 *      type: string
 *      description: The user's login
 *      example: pavel
 *     role:
 *      type: string
 *      description: The user's role with appropriate rights
 *      example: USER
 *     token:
 *      type: string
 *      description: The key access to methods
 *      example: RtlutCJjkVgRYIGizH1QIot-BBz2Yqjso
 *   ListUsersResponse:
 *    type: object
 *    properties:
 *     id:
 *      type: number
 *      description: The user ID.
 *      example: 1
 *     login:
 *      type: string
 *      description: The user's login
 *      example: pavel
 *     password:
 *      type: string
 *      description: The user's password
 *      example: 7qLsNyOn41sDQCnjsUGX
 *     role:
 *      type: string
 *      description: The user's role with appropriate rights
 *      example: USER
 *     avatar:
 *      type: string
 *      description: The path of user photo
 *      example: ./static/images/avatar.jpg
 *     createdAt:
 *      type: string
 *      description: The creation date of user
 *      example: 2023-10-25T08:15:54.255Z
 *     updatedAt:
 *      type: string
 *      description: The update date of user
 *      example: 2023-10-25T08:15:54.255Z
 *   DeleteUsersRequest:
 *    type: object
 *    properties:
 *     listId:
 *      type: array
 *      example: [1,2,3]
 *   DeleteUsersResponse:
 *    example: [1,2,3]
 *   UploadAvatar:
 *    type: object
 *    properties:
 *     login:
 *      type: string
 *      description: The user's login
 *      example: pavel
 *     file:
 *      type: Blob
 *      description: The user's avatar
 *      example: file.jpg
 */

const User: IUserModel = connection.define('users', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  login: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: 'USER' },
  avatar: { type: DataTypes.STRING, defaultValue: 'A' },
});

export default User;
