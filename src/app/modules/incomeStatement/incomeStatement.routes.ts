import express from 'express';
import { IncomeStatementControllers } from './income.controller';

const routes = express.Router();

routes.get('/', IncomeStatementControllers.getEmployeeIncomeStatement);
routes.get('/summery', IncomeStatementControllers.getEmployeeIncomeStatementSummery);
routes.get('/last-paid', IncomeStatementControllers.getLastTwentyEightDasysPaidAmount);
routes.get('/due-collection-statement', IncomeStatementControllers.getDueCollectionStatement);
routes.get('/refund-statement', IncomeStatementControllers.getRefundStatement);

export const IncomeStatementRoutes = { routes };
