import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { DepartmentService } from './departments.service';

const createDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.body);
    const result = await DepartmentService.createDepartment(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await DepartmentService.updateDepartment(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await DepartmentService.deleteDepartment(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await DepartmentService.getAllDepartment(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await DepartmentService.getSingleDepartment(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const DepartmentController = {
  createDepartment,
  updateDepartment,
  deleteDepartment,
  getAllDepartment,
  getSingleDepartment
};
