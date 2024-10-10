import express from 'express';
import { AuthenticationController } from './auth.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AuthValidation } from './auth.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_PERMISSION } from '../../../enums/user';

const router = express.Router();

router.post(
  '/login',
  validateRequest(AuthValidation.loginZodSchema),
  AuthenticationController.loginUser
);
router.post(
  '/refresh-token',
  validateRequest(AuthValidation.refreshTokenZodSchema),
  AuthenticationController.refreshToken
);

router.post('/forgot-password', AuthenticationController.forgotPassword);
router.post('/reset-password', AuthenticationController.resetPassword);

router.post(
  '/change-password',
  auth(ENUM_USER_PERMISSION.SUPER_ADMIN, ENUM_USER_PERMISSION.ADMIN, ENUM_USER_PERMISSION.USER),
  validateRequest(AuthValidation.changePasswordZodSchema),
  AuthenticationController.changePassword
);
router.post('/change-password-by-admin', AuthenticationController.changeUserPasswordBYAdmin);
export const AuthRoutes = { router };
