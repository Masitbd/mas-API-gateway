import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { BedService } from './bed.service';

const getBeds = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BedService.getbedsFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

//
const createBed = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BedService.createBedsIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const updateBed = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BedService.updateBedIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteBed = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BedService.deleteBedsIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const BedControllers = {
  getBeds,
  createBed,
  updateBed,
  deleteBed
};
