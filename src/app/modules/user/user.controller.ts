import { NextFunction, Request, Response } from 'express';
import { UserService } from './user.service';
import sendResponse from '../../../shared/response';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.postUser(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.patchUser(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.fetchAllUser(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.fetchSingleUser(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
export const UserController = {
  createUser,
  updateUser,
  getAllUser,
  getSingleUser
};
