import { NextFunction, Request, Response } from 'express';
import { AccountService } from './accountService';
import sendResponse from '../../../shared/response';

const getSingleAccount = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AccountService.fetchSinlgeAccount(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AccountController = { getSingleAccount };
