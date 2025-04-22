import { Router } from 'express';
import { IndoorFinanceControllers } from './finance.controller';

const routes = Router();

routes.get('/', IndoorFinanceControllers.getIndoorIncomeLedger);
routes.get('/due-collection', IndoorFinanceControllers.getIndoorDueLedger);
routes.get('/due-collection-statement', IndoorFinanceControllers.getIndoorDueCollectionLedger);
routes.get('/daily-collection-details', IndoorFinanceControllers.getIndoorEmpDetailsLedger);
routes.get('/hospital-bill-summery/:id', IndoorFinanceControllers.getPateintHospitalBillSummery);

export const IndoorFinanceRoutes = { routes };
