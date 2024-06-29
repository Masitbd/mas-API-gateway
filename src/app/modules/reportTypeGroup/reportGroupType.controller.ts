import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { ReportGroupTypeService } from './reoortType.service';

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ReportGroupTypeService.post(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ReportGroupTypeService.patch(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ReportGroupTypeService.fetchAll(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ReportGroupTypeService.fetchSingle(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const ReportTypeGroupController = {
  create,
  update,
  getAll,
  getSingle
};
