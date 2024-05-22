import { NextFunction, Request, Response } from 'express';
import { PermissionService } from './permission.service';
import sendResponse from '../../../shared/response';

const createPermission = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await PermissionService.postPermission(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updatePermission = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await PermissionService.patchPermission(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const removePermission = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await PermissionService.deletePermission(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSinglePermission = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await PermissionService.fetchSinglePermission(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllPermission = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await PermissionService.fetchAllPermissions(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const PermissionController = {
  createPermission,
  updatePermission,
  removePermission,
  getSinglePermission,
  getAllPermission
};
