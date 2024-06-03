import express from 'express';
import { ENUM_USER_PERMISSION } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { UserPermissionController } from './userPermission.controller';
const routes = express.Router();

routes.patch(
  '/:uuid',
  auth(
    ENUM_USER_PERMISSION.SUPER_ADMIN,
    ENUM_USER_PERMISSION.ADMIN,
    ENUM_USER_PERMISSION.MANAGE_USER_PERMISSIONS
  ),
  UserPermissionController.updateUserPermission
);

export const UserPermissionRoutes = { routes };
