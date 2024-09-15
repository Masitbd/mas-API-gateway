import express from 'express';
import { OrderController } from './order.controller';
const routes = express.Router();
routes.get('/invoice/:oid', OrderController.getInvoice);
routes.post('/', OrderController.createOrder);
routes.patch('/:id', OrderController.updateOrder);
routes.get('/', OrderController.getAllOrder);
routes.get('/:id', OrderController.getSingleOrder);
routes.patch('/dewCollection/:oid', OrderController.dewCollection);
routes.post('/statusChange/:oid', OrderController.singleStatusChanger);

export const OrderRoutes = { routes };
