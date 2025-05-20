import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { packagesService } from './packageItem.service';

const getPackages = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await packagesService.getPackagesFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

//
const createPackages = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await packagesService.createPackagesIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const updatePackages = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await packagesService.updateWorldIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deletePackages = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await packagesService.deletePackagesIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSinglePackage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await packagesService.getSinglePackage(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
export const packagesControllers = {
  getPackages,
  createPackages,
  updatePackages,
  deletePackages,
  getSinglePackage
};
