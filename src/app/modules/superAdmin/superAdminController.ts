import { NextFunction, Request, Response } from 'express';
import { SuperAdminService } from './superAdmin.service';
import sendResponse from '../../../shared/response';

const createSuperAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SuperAdminService.postSuperAdmin(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const SuperAdmincontroller = { createSuperAdmin };
