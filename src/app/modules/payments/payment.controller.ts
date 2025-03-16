import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { PaymentsService } from './payments.service';

const getPayments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await PaymentsService.getPaymentsFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

//
const createPayments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await PaymentsService.createPaymentsIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const updatePayments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await PaymentsService.updatePaymentsntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deletePayments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await PaymentsService.deletePaymentsIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const PaymentsControllers = {
  getPayments,
  createPayments,
  updatePayments,
  deletePayments
};
