import express from 'express';
import { OrderController } from './order.controller';
const routes = express.Router();
routes.get('/invoice/:oid', OrderController.getInvoice);
// get income
routes.post('/income-statement', OrderController.getIncome);
routes.post('/', OrderController.createOrder);

routes.patch('/:id', OrderController.updateOrder);
routes.get('/', OrderController.getAllOrder);
routes.get('/:id', OrderController.getSingleOrder);
routes.patch('/dewCollection/:oid', OrderController.dewCollection);

export const OrderRoutes = { routes };
