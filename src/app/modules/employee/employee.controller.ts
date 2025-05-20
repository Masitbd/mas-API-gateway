import { Request, Response, NextFunction } from 'express';
import { EmployeeService } from './employee.service';
import sendResponse from '../../../shared/response';
const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await EmployeeService.post(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await EmployeeService.patch(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const remove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await EmployeeService.remove(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await EmployeeService.fetchSIngle(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await EmployeeService.fetchAll(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const EmployeeCntroller = {
  create,
  update,
  remove,
  getSingle,
  getAll
};
