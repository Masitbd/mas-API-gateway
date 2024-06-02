import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { SpecimenService } from './specimen.service';

const createSpecimen = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SpecimenService.createSpecimen(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateSpecimen = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SpecimenService.updateSpecimen(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteSpecimen = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SpecimenService.deleteSpecimen(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllSpecimen = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SpecimenService.getAllSpecimen(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleSpecimen = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SpecimenService.getSingleSpecimen(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const SpecimenController = {
  createSpecimen,
  updateSpecimen,
  deleteSpecimen,
  getAllSpecimen,
  getSingleSpecimen
};
