import { Request, Response, NextFunction } from 'express';
import { ReportService } from './report.service';
import sendResponse from '../../../shared/response';
const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ReportService.create(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ReportService.update(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ReportService.fetchSingle(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ReportService.fetchAll(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const ReportController = { create, update, getSingle, getAll };
