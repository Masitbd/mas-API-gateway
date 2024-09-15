import express from 'express';
import { IncomeStatementControllers } from './income.controller';

const routes = express.Router();

routes.get('/', IncomeStatementControllers.getEmployeeIncomeStatement);
routes.get('/summery', IncomeStatementControllers.getEmployeeIncomeStatementSummery);

export const IncomeStatementRoutes = { routes };
