import { Request } from 'express';
import { Core_Service_Api_Path } from '../../../enums/coreServiceApiPath';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';

const createTestReport = async (req: Request) => {
  const response: IGenericResponse = await CoreService.post(
    Core_Service_Api_Path.TESTREPORT,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};
const updateTestReport = async (req: Request) => {
  const response: IGenericResponse = await CoreService.patch(
    `${Core_Service_Api_Path.TESTREPORT}/${req.params.id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const deleteTestReport = async (req: Request) => {
  const response: IGenericResponse = await CoreService.delete(
    `${Core_Service_Api_Path.TESTREPORT}/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const getAllTestReport = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(Core_Service_Api_Path.TESTREPORT, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
const getAllTestReportPrint = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(Core_Service_Api_Path.TESTREPORT, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getSingleTestReport = async (req: Request) => {
  const response: IGenericResponse = await CoreService.post(
    `${Core_Service_Api_Path.TESTREPORT}/print/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

export const TestReportService = {
  createTestReport,
  updateTestReport,
  deleteTestReport,
  getSingleTestReport,
  getAllTestReportPrint,
  getAllTestReport
};
