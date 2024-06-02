import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { PdrvService } from './prdv.service';

const createPdrv = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await PdrvService.createPdrv(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updatePdrv = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await PdrvService.updatePdrv(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deletePdrv = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await PdrvService.deletePdrv(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllPdrv = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await PdrvService.getAllPdrv(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSinglePdrv = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await PdrvService.getSinglePdrv(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const PdrvController = {
  createPdrv,
  updatePdrv,
  deletePdrv,
  getAllPdrv,
  getSinglePdrv
};
