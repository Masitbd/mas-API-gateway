import { Request, Response, NextFunction } from 'express';
import sendResponse from '../../../shared/response';
import { MiscellaneousService } from './miscellaneous.service';

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await MiscellaneousService.post(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await MiscellaneousService.patch(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const Remove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await MiscellaneousService.reomve(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await MiscellaneousService.fetch(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getsingle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await MiscellaneousService.fetchSingle(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getMarginData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await MiscellaneousService.getMarginDataFromDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const MiscellaneousController = {
  create,
  update,
  Remove,
  getAll,
  getsingle,
  getMarginData
};
