import { NextFunction, Request, Response } from 'express';
import { FinancialReportService } from './financialReport.service';
import sendResponse from '../../../shared/response';

const getOverallCommission = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FinancialReportService.getOverallCommission(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getDoctorPerformanceSUmmery = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FinancialReportService.fetchDoctorPerformanceSummery(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getTestWIseIncomeStatement = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FinancialReportService.getTestWiseIncomeStatement(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getDeptWIseIncomeStatement = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FinancialReportService.getDeptWiseIncomeStatement(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const FinancialReportController = {
  getOverallCommission,
  getDoctorPerformanceSUmmery,
  getTestWIseIncomeStatement,
  getDeptWIseIncomeStatement
};
