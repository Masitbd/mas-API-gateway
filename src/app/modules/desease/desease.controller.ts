import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { deseaseService } from './desease.service';

const getDesease = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await deseaseService.getDeseaseFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

//
const createDesease = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await deseaseService.createDeseaseIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const updateDesease = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await deseaseService.updateWorldIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteDesease = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await deseaseService.deleteDeseaseIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const deseaseControllers = {
  getDesease,
  createDesease,
  updateDesease,
  deleteDesease
};
