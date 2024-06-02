import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { VacuumTubeService } from './vacuumTube.service';

const createVacuumTube = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await VacuumTubeService.createVacuumTube(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateVacuumTube = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await VacuumTubeService.updateVacuumTube(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteVacuumTube = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await VacuumTubeService.deleteVacuumTube(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllVacuumTube = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await VacuumTubeService.getAllVacuumTube(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleVacuumTube = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await VacuumTubeService.getSingleVacuumTube(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const VacuumTubeController = {
  createVacuumTube,
  updateVacuumTube,
  deleteVacuumTube,
  getAllVacuumTube,
  getSingleVacuumTube
};
