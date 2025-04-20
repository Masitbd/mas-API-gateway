import { Router } from 'express';
import { IndoorFinanceControllers } from './finance.controller';

const routes = Router();

routes.get('/', IndoorFinanceControllers.getIndoorIncomeLedger);
routes.get('/due-collection', IndoorFinanceControllers.getIndoorDueLedger);
routes.get('/due-collection-statement', IndoorFinanceControllers.getIndoorDueCollectionLedger);
routes.get('/daily-collection-details', IndoorFinanceControllers.getIndoorEmpDetailsLedger);

export const IndoorFinanceRoutes = { routes };
