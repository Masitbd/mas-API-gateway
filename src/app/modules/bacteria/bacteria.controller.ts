import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { BacteriaService } from './bacteria.service';

const createBacteria = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BacteriaService.postBacteria(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateBacteria = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BacteriaService.patchBacteria(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const removeBacteria = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BacteriaService.deleteBacteria(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllBacteria = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BacteriaService.fetchAll(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleBacteria = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BacteriaService.fetchSingle(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const BacteriaController = {
  createBacteria,
  updateBacteria,
  removeBacteria,
  getAllBacteria,
  getSingleBacteria
};
