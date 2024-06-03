import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';

import { HospitalGroupService } from './hospitalGroup.service';

const createHospitalGroup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await HospitalGroupService.createHospitalGroup(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateHospitalGroup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await HospitalGroupService.updateHospitalGroup(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteHospitalGroup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await HospitalGroupService.deleteHospitalGroup(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllHospitalGroup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await HospitalGroupService.getAllHospitalGroup(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleHospitalGroup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await HospitalGroupService.getSingleHospitalGroup(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const HospitalGroupController = {
  createHospitalGroup,
  updateHospitalGroup,
  deleteHospitalGroup,
  getAllHospitalGroup,
  getSingleHospitalGroup
};
