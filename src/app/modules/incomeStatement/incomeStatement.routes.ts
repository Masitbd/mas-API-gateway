import express from 'express';
import { IncomeStatementControllers } from './income.controller';

const routes = express.Router();

routes.get('/', IncomeStatementControllers.getEmployeeIncomeStatement);
routes.get('/summery', IncomeStatementControllers.getEmployeeIncomeStatementSummery);
routes.get('/last-paid', IncomeStatementControllers.getLastTwentyEightDasysPaidAmount);

export const IncomeStatementRoutes = { routes };
