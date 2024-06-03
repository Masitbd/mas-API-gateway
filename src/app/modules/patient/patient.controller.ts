import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { PatientService } from './patient.service';

const createPatient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await PatientService.createPatient(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updatePatient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await PatientService.updatePatient(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

// const deletePatient = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const result = await PatientService.deletePatient(req);

//     sendResponse(res, result);
//   } catch (error) {
//     next(error);
//   }
// };

const getAllPatient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await PatientService.getAllPatient(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSinglePatient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await PatientService.getSinglePatient(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const PatientController = {
  createPatient,
  updatePatient,
  //   deletePatient,
  getAllPatient,
  getSinglePatient
};
