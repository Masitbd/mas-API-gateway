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
const getLastTwentyEightDasysPaidAmount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await IncomeServices.getLastTwentyEightDasysPaidAmountFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

// ! due collection statement

const getDueCollectionStatement = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await IncomeServices.getDueCollectionStatementFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getRefundStatement = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await IncomeServices.getRefundStatementFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const IncomeStatementControllers = {
  getEmployeeIncomeStatement,
  getEmployeeIncomeStatementSummery,
  getLastTwentyEightDasysPaidAmount,
  getDueCollectionStatement,
  getRefundStatement
};
