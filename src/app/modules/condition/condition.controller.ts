import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { ConditionService } from './condition.service';

const createCondition = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ConditionService.createCondition(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateCondition = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ConditionService.updateCondition(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteCondition = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ConditionService.deleteCondition(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllCondition = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ConditionService.getAllCondition(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleCondition = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ConditionService.getSingleCondition(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const ConditionController = {
  createCondition,
  updateCondition,
  deleteCondition,
  getAllCondition,
  getSingleCondition
};
