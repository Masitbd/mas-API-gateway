import { NextFunction, Request, Response } from 'express';
import { TestService } from './test.service';
import sendResponse from '../../../shared/response';

const createTest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await TestService.postTest(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateTest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await TestService.pathchTest(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const removeTest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await TestService.deleteTest(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllTest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await TestService.fetchAllTest(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleTest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await TestService.fetchSingleTest(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const TestController = { createTest, updateTest, removeTest, getAllTest, getSingleTest };
