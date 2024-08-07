import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { DoctorSealService } from './seal.service';

const createDoctorSeal = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await DoctorSealService.createDoctorSeal(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateDoctorSeal = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await DoctorSealService.updateDoctorSeal(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteDoctorSeal = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await DoctorSealService.deleteDoctorSeal(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllDoctorSeal = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await DoctorSealService.getAllDoctorSeal(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleDoctorSeal = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await DoctorSealService.getSingleDoctorSeal(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const DoctorSealController = {
    createDoctorSeal,
    updateDoctorSeal,
    getSingleDoctorSeal,
    getAllDoctorSeal,
    deleteDoctorSeal,
};