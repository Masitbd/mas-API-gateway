import { NextFunction, Request, Response } from 'express';
import { UserPermissionService } from './userPermission.service';
import sendResponse from '../../../shared/response';

const updateUserPermission = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserPermissionService.patchUserPermission(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const UserPermissionController = { updateUserPermission };
