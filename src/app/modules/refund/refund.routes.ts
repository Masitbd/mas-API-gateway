import express from 'express';
import { RefundCntroller } from './refund.controller';
const routes = express.Router();

routes.post('/', RefundCntroller.create);
routes.get('/', RefundCntroller.getAll);

export const RefundRoutes = { routes };
