import express from 'express';
import { FinancialReportController } from './financialReport.controller';

const routes = express.Router();

routes.get('/commission/all', FinancialReportController.getOverallCommission);
routes.get('/commission/single/:id', FinancialReportController.getDoctorPerformanceSUmmery);
routes.get('/incomeStatement/testWise', FinancialReportController.getTestWIseIncomeStatement);
routes.get('/incomeStatement/deptWise', FinancialReportController.getDeptWIseIncomeStatement);
routes.get('/incomeStatement/clientWise', FinancialReportController.clientWiseIncomeStatement);
routes.get('/incomeStatement/refByWise', FinancialReportController.refByWiseIncomeStatement);
routes.get('/collectionStatement/deptWise', FinancialReportController.getDeptWIseCollectionSummery);

routes.get(
  '/doctorsPerformance/deptWise/:id',
  FinancialReportController.getDeptWiseDoctorPerformance
);
routes.get(
  '/doctorsPerformance/testWise/:id',
  FinancialReportController.getTestWiseDoctorPerformance
);
routes.get('/employeeLedger', FinancialReportController.getEmployeeLedger);
routes.get('/tests', FinancialReportController.getAllTests);
routes.get('/doctors', FinancialReportController.getAllDoctors);
routes.get('/marketing-executive-performance', FinancialReportController.getEmployeePerformance);
export const FinancialReportRoutes = { routes };
