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
const getDeptWIseCollectionSummery = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FinancialReportService.fetchDeptWiseCollectionSummery(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getDeptWiseDoctorPerformance = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FinancialReportService.fetchDeptWIseDoctorPerformance(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getTestWiseDoctorPerformance = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FinancialReportService.fetchTestWIseDoctorPerformance(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const clientWiseIncomeStatement = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FinancialReportService.clientWiseIncomeStatement(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const refByWiseIncomeStatement = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FinancialReportService.refByWiseIncomeStatement(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getEmployeeLedger = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FinancialReportService.fetchEmployeeLedger(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllTests = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FinancialReportService.fetchAllTests(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllDoctors = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FinancialReportService.fetchAllDoctors(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getEmployeePerformance = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FinancialReportService.fetchEmployeePerfromance(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
export const FinancialReportController = {
  getOverallCommission,
  getDoctorPerformanceSUmmery,
  getTestWIseIncomeStatement,
  getDeptWIseIncomeStatement,
  getDeptWIseCollectionSummery,
  getDeptWiseDoctorPerformance,
  getTestWiseDoctorPerformance,
  clientWiseIncomeStatement,
  refByWiseIncomeStatement,
  getEmployeeLedger,
  getAllDoctors,
  getAllTests,
  getEmployeePerformance
};
