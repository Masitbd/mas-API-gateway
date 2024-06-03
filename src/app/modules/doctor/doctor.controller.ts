import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { DoctorService } from './doctor.service';

const createDoctor = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await DoctorService.createDoctor(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateDoctor = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await DoctorService.updateDoctor(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteDoctor = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await DoctorService.deleteDoctor(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllDoctor = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await DoctorService.getAllDoctor(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleDoctor = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await DoctorService.getSingleDoctor(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const DoctorController = {
  createDoctor,
  updateDoctor,
  deleteDoctor,
  getAllDoctor,
  getSingleDoctor
};
