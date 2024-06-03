import express from 'express';
import auth from '../../middlewares/auth';
import { ENUM_USER_PERMISSION } from '../../../enums/user';
import { ProfileController } from './profile.controller';
import validateRequest from '../../middlewares/validateRequest';
import { ProfileValidator } from './profileValidation';
const routes = express.Router();

routes.get(
  '/',
  auth(ENUM_USER_PERMISSION.ADMIN, ENUM_USER_PERMISSION.SUPER_ADMIN, ENUM_USER_PERMISSION.USER),
  ProfileController.getSingleProfile
);

routes.patch(
  '/:uuid',
  auth(ENUM_USER_PERMISSION.ADMIN, ENUM_USER_PERMISSION.SUPER_ADMIN, ENUM_USER_PERMISSION.USER),
  validateRequest(ProfileValidator.patchVlaidation),
  ProfileController.updateProfile
);

export const ProfileRoutes = { routes };
