import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { RefundService } from './refund.service';

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RefundService.post(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RefundService.getAl(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RefundService.getSingle(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const RefundCntroller = {
  create,
  getAll,
  getSingle
};
