import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { OrderService } from './order.service';

const getInvoice = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OrderService.fetchInvoice(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OrderService.postOrder(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OrderService.patchOrder(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OrderService.fetchAllOrder(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OrderService.fetchSingleOrder(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const dewCollection = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OrderService.dewCollection(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getIncome = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OrderService.getIncomeStatement(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const OrderController = {
  getInvoice,
  createOrder,
  updateOrder,
  getAllOrder,
  getSingleOrder,
  dewCollection,
  getIncome
};
