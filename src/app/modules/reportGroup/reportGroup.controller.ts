import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { ReportGroupService } from './reportGroup.service';

const createReportGroup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ReportGroupService.createReportGroup(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateReportGroup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ReportGroupService.updateReportGroup(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteReportGroup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ReportGroupService.deleteReportGroup(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllReportGroup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ReportGroupService.getAllReportGroup(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleReportGroup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ReportGroupService.getSingleReportGroup(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const ReportGroupController = {
  createReportGroup,
  updateReportGroup,
  deleteReportGroup,
  getAllReportGroup,
  getSingleReportGroup
};
