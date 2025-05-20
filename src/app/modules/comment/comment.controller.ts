import { Request, Response, NextFunction } from 'express';
import { CommentService } from './comment.service';
import sendResponse from '../../../shared/response';

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CommentService.post(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CommentService.patch(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const Remove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CommentService.reomve(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CommentService.fetch(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getsingle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CommentService.fetchSingle(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const CommentController = {
  create,
  update,
  Remove,
  getAll,
  getsingle
};
