import express from 'express';
import { FinancialReportController } from './financialReport.controller';

const routes = express.Router();

routes.get('/commission/all', FinancialReportController.getOverallCommission);
routes.get('/commission/single/:id', FinancialReportController.getDoctorPerformanceSUmmery);
routes.get('/incomeStatement/testWise', FinancialReportController.getTestWIseIncomeStatement);
routes.get('/incomeStatement/deptWise', FinancialReportController.getDeptWIseIncomeStatement);

export const FinancialReportRoutes = { routes };
