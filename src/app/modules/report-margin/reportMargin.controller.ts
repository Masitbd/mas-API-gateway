import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { ReportMargin } from './reportMargin.service';

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ReportMargin.post(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ReportMargin.fetchAll(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const ReportMarginContorller = { create, getAll };
