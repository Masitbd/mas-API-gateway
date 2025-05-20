import express, { NextFunction, Request, Response } from 'express';
import { UserController } from './user.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_PERMISSION } from '../../../enums/user';
import { FileUploadHelper } from '../../../helpers/FileUploadHelper';
import { UserValidation } from './user.validations';

const routes = express.Router();

routes.post(
  '/',
  auth(
    ENUM_USER_PERMISSION.ADMIN,
    ENUM_USER_PERMISSION.SUPER_ADMIN,
    ENUM_USER_PERMISSION.MANAGE_USER
  ),
  UserController.createUser
);

routes.patch(
  '/:uuid',
  auth(
    ENUM_USER_PERMISSION.ADMIN,
    ENUM_USER_PERMISSION.SUPER_ADMIN,
    ENUM_USER_PERMISSION.MANAGE_USER
  ),
  UserController.updateUser
);

routes.get('/', UserController.getAllUser);

routes.get(
  '/:uuid',
  auth(
    ENUM_USER_PERMISSION.ADMIN,
    ENUM_USER_PERMISSION.SUPER_ADMIN,
    ENUM_USER_PERMISSION.MANAGE_USER,
    ENUM_USER_PERMISSION.GET_ALL_USER
  ),
  UserController.getSingleUser
);

export const userRoutes = { routes };
