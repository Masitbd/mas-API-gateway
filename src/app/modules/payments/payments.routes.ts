import { Router } from 'express';
import { PaymentsControllers } from './payment.controller';

const routes = Router();

routes.get('/', PaymentsControllers.getPayments);

routes.post('/', PaymentsControllers.createPayments);
routes.patch('/:regno', PaymentsControllers.updatePayments);
routes.delete('/:id', PaymentsControllers.deletePayments);

export const PaymentsRoutes = { routes };
