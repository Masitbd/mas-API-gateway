import { NextFunction, Request, Response } from 'express';
import { ProfileService } from './profile.service';
import sendResponse from '../../../shared/response';

const updateProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ProfileService.patchProfile(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ProfileService.fetchSingleProfile(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const ProfileController = {
  updateProfile,
  getSingleProfile
};
