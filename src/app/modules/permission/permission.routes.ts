import express from 'express';
import auth from '../../middlewares/auth';
import { ENUM_USER_PERMISSION } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import { PermissionValidation } from './permission.validtion';
import { PermissionController } from './permission.controller';
const routes = express.Router();
routes.post(
  '/',
  auth(
    ENUM_USER_PERMISSION.MANAGE_PERMISSIONS,
    ENUM_USER_PERMISSION.ADMIN,
    ENUM_USER_PERMISSION.SUPER_ADMIN
  ),
  validateRequest(PermissionValidation.postValidaiton),
  PermissionController.createPermission
);

routes.patch(
  '/:id',
  auth(
    ENUM_USER_PERMISSION.MANAGE_PERMISSIONS,
    ENUM_USER_PERMISSION.ADMIN,
    ENUM_USER_PERMISSION.SUPER_ADMIN
  ),
  validateRequest(PermissionValidation.patchValidaiton),
  PermissionController.updatePermission
);
routes.delete(
  '/:id',
  auth(
    ENUM_USER_PERMISSION.MANAGE_PERMISSIONS,
    ENUM_USER_PERMISSION.ADMIN,
    ENUM_USER_PERMISSION.SUPER_ADMIN
  ),
  PermissionController.removePermission
);

routes.get(
  '/:id',
  auth(
    ENUM_USER_PERMISSION.MANAGE_PERMISSIONS,
    ENUM_USER_PERMISSION.GET_PERMISSIONS,
    ENUM_USER_PERMISSION.ADMIN,
    ENUM_USER_PERMISSION.SUPER_ADMIN
  ),
  PermissionController.getSinglePermission
);

routes.get(
  '/',
  auth(
    ENUM_USER_PERMISSION.MANAGE_PERMISSIONS,
    ENUM_USER_PERMISSION.GET_PERMISSIONS,
    ENUM_USER_PERMISSION.ADMIN,
    ENUM_USER_PERMISSION.SUPER_ADMIN
  ),
  PermissionController.getAllPermission
);

export const permissionRoutes = { routes };
