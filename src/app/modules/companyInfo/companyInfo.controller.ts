import { NextFunction, Request, Response } from 'express';
import { ComapnyInfoServices } from './companyInfo.service';
import sendResponse from '../../../shared/response';

const createCompanyInfo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ComapnyInfoServices.createCompanyInfoIntoDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

// get

const getCompanyInfo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ComapnyInfoServices.getCompanyInfoIntoDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

// updatge

const updateCompanyInfo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ComapnyInfoServices.updateCompanyInfoIntoDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const CompanyControllers = {
  createCompanyInfo,
  getCompanyInfo,
  updateCompanyInfo
};
