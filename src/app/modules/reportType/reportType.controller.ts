import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { ReportTypeService } from './reportType.service';

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ReportTypeService.post(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ReportTypeService.patch(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ReportTypeService.fetchSingle(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ReportTypeService.fetchAll(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const ReportTypeController = { create, update, getSingle, getAll };
