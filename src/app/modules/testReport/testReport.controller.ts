import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { TestReportService } from './testReport.service';

const createTestReport = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await TestReportService.createTestReport(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateTestReport = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await TestReportService.updateTestReport(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteTestReport = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await TestReportService.deleteTestReport(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllTestReport = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await TestReportService.getAllTestReport(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleTestReport = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await TestReportService.getSingleTestReport(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getSingleTestReportPrint = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req);
    const result = await TestReportService.getSingleTestReport(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const TestReportController = {
  createTestReport,
  updateTestReport,
  deleteTestReport,
  getAllTestReport,
  getSingleTestReport,
  getSingleTestReportPrint
};
