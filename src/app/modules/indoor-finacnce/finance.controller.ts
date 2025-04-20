import { NextFunction, Request, Response } from 'express';
import { IndoorFinanceService } from './finance.service';
import sendResponse from '../../../shared/response';

const getIndoorIncomeLedger = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await IndoorFinanceService.getIndoorIncomeLedgerFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getIndoorDueLedger = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await IndoorFinanceService.getIndoorDueLedgerFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getIndoorDueCollectionLedger = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await IndoorFinanceService.getIndoorDueCollectionLedgerFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getIndoorEmpDetailsLedger = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await IndoorFinanceService.getIndoorEmpDetailsLedgerFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const IndoorFinanceControllers = {
  getIndoorIncomeLedger,
  getIndoorDueCollectionLedger,
  getIndoorDueLedger,
  getIndoorEmpDetailsLedger
};
