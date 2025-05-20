import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { AdmissionsService } from './admission.service';

const getAdmissions = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AdmissionsService.getAdmissionsFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getTodayAdmissions = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AdmissionsService.getTodayAdmissionsFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getAdmissionsOVerPeriod = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AdmissionsService.getAdmissionsOverPeriodFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getSignleAdmissions = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AdmissionsService.getSingleAdmissionsFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

//
const createAdmissions = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AdmissionsService.createAdmissionsIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
// release
const releaseAdmit = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AdmissionsService.relesaseAdmitPatientIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const transferPatientBed = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AdmissionsService.transferPatientBeDIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const addPateintService = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AdmissionsService.addServiceToPatientIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const updateAdmissions = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AdmissionsService.updateAdmissionsntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteAdmissions = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AdmissionsService.deleteAdmissionsIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AdmissionControllers = {
  getAdmissions,
  getTodayAdmissions,
  getAdmissionsOVerPeriod,
  getSignleAdmissions,
  createAdmissions,
  releaseAdmit,
  transferPatientBed,
  addPateintService,
  updateAdmissions,
  deleteAdmissions
};
