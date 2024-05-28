import express from 'express';
import { userRoutes } from '../modules/user/user.routes';
import { AuthRoutes } from '../modules/auth/auth.routes';

import { adminRoutes } from '../modules/admin/admin.routes';

import { permissionRoutes } from '../modules/permission/permission.routes';
import { SuperAdminRoutes } from '../modules/superAdmin/superAdmin.routes';
import { UserPermissionRoutes } from '../modules/userPermission/userPermission.routes';
import { ProfileRoutes } from '../modules/profile/profile.routes';
import { TesRoutes } from '../modules/test/test.routes';
import { OrderRoutes } from '../modules/order/order.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    routes: AuthRoutes.router
  },
  {
    path: '/user',
    routes: userRoutes.routes
  },

  {
    path: '/admins',
    routes: adminRoutes
  },

  {
    path: '/permission',
    routes: permissionRoutes.routes
  },
  {
    path: '/superAdmin',
    routes: SuperAdminRoutes.routes
  },
  {
    path: '/userPermission',
    routes: UserPermissionRoutes.routes
  },
  {
    path: '/profile',
    routes: ProfileRoutes.routes
  },
  {
    path: '/test',
    routes: TesRoutes.routes
  },
  {
    path: '/order',
    routes: OrderRoutes.routes
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
