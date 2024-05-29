import express from 'express';
import { AccountController } from './account.controller';
const routes = express.Router();
routes.get('/:id', AccountController.getSingleAccount);

export const AccountRoutes = { routes };
