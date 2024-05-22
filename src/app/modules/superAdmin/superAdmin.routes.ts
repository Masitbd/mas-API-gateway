import express from 'express';
import { SuperAdmincontroller } from './superAdminController';
const routes = express.Router();

routes.get('/', SuperAdmincontroller.createSuperAdmin);

export const SuperAdminRoutes = { routes };
