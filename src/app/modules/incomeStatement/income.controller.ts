import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { IncomeServices } from './incomeStetmnet.service';

const getEmployeeIncomeStatement = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await IncomeServices.getEmployeeIncomeStatementFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

//
const getEmployeeIncomeStatementSummery = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await IncomeServices.getEmployeeIncomeStatementSummeryFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const IncomeStatementControllers = {
  getEmployeeIncomeStatement,
  getEmployeeIncomeStatementSummery
};
