import express from 'express';
import { ENUM_USER_PERMISSION } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { AdminController } from './admin.controller';
import { AdminValidation } from './admin.validation';

const router = express.Router();

router.get('/', AdminController.getAllFromDB);
router.get('/:id', AdminController.getByIdFromDB);

router.patch(
  '/:id',
  validateRequest(AdminValidation.updateAdmin),
  auth(ENUM_USER_PERMISSION.SUPER_ADMIN, ENUM_USER_PERMISSION.ADMIN),
  AdminController.updateOneInDB
);

router.delete(
  '/:id',
  auth(ENUM_USER_PERMISSION.SUPER_ADMIN, ENUM_USER_PERMISSION.ADMIN),
  AdminController.deleteByIdFromDB
);

export const adminRoutes = router;
