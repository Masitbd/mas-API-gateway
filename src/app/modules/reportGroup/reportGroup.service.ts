import { Request } from 'express';
import { Core_Service_Api_Path } from '../../../enums/coreServiceApiPath';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';

const createReportGroup = async (req: Request) => {
  const response: IGenericResponse = await CoreService.post(
    Core_Service_Api_Path.REPORTGROUP,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};
const updateReportGroup = async (req: Request) => {
  const response: IGenericResponse = await CoreService.patch(
    `${Core_Service_Api_Path.REPORTGROUP}/${req.params.id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const deleteReportGroup = async (req: Request) => {
  const response: IGenericResponse = await CoreService.delete(
    `${Core_Service_Api_Path.REPORTGROUP}/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const getAllReportGroup = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(Core_Service_Api_Path.REPORTGROUP, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getSingleReportGroup = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(
    `${Core_Service_Api_Path.REPORTGROUP}/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

export const ReportGroupService = {
  createReportGroup,
  updateReportGroup,
  deleteReportGroup,
  getSingleReportGroup,
  getAllReportGroup
};
