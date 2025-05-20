import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { SensitivityService } from './sensitivity.service';

const createSensitivity = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SensitivityService.createSensitivity(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateSensitivity = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SensitivityService.updateSensitivity(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteSensitivity = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SensitivityService.deleteSensitivity(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllSensitivity = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SensitivityService.getAllSensitivity(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleSensitivity = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SensitivityService.getSingleSensitivity(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const SensitivityController = {
  createSensitivity,
  updateSensitivity,
  deleteSensitivity,
  getAllSensitivity,
  getSingleSensitivity
};
