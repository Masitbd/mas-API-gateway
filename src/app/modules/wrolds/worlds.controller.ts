import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { WorldsService } from './worlds.service';

const getWorlds = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await WorldsService.getWorldsFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

//
const createWorlds = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await WorldsService.createWorldsIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const updateWorlds = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await WorldsService.updateWorldIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteWorlds = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await WorldsService.deleteWorldsIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const WorldControllers = {
  getWorlds,
  createWorlds,
  updateWorlds,
  deleteWorlds
};
