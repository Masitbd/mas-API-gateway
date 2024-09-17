import { Core_Service_Api_Path } from '../../../enums/coreServiceApiPath';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';
import { Request } from 'express';

const getOverallCommission = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(
    Core_Service_Api_Path.FINANCIALREPORT + '/commission/all',
    {
      headers: {
        Authorization: req.headers.authorization
      },
      params: req.query
    }
  );
  return response;
};
const fetchDoctorPerformanceSummery = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(
    Core_Service_Api_Path.FINANCIALREPORT + '/commission/single/' + req.params.id,
    {
      headers: {
        Authorization: req.headers.authorization
      },
      params: req.query
    }
  );
  return response;
};

const getTestWiseIncomeStatement = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(
    Core_Service_Api_Path.FINANCIALREPORT + '/incomeStatement/testWise',
    {
      headers: {
        Authorization: req.headers.authorization
      },
      params: req.query
    }
  );
  return response;
};

const getDeptWiseIncomeStatement = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(
    Core_Service_Api_Path.FINANCIALREPORT + '/incomeStatement/deptWise',
    {
      headers: {
        Authorization: req.headers.authorization
      },
      params: req.query
    }
  );
  return response;
};

const fetchDeptWiseCollectionSummery = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(
    Core_Service_Api_Path.FINANCIALREPORT + '/collectionStatement/deptWise',
    {
      headers: {
        Authorization: req.headers.authorization
      },
      params: req.query
    }
  );
  return response;
};

const fetchDeptWIseDoctorPerformance = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(
    Core_Service_Api_Path.FINANCIALREPORT + '/doctorsPerformance/deptWise/' + req.params.id,
    {
      headers: {
        Authorization: req.headers.authorization
      },
      params: req.query
    }
  );
  return response;
};
const fetchTestWIseDoctorPerformance = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(
    Core_Service_Api_Path.FINANCIALREPORT + '/doctorsPerformance/testWise/' + req.params.id,
    {
      headers: {
        Authorization: req.headers.authorization
      },
      params: req.query
    }
  );
  return response;
};
const clientWiseIncomeStatement = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(
    Core_Service_Api_Path.FINANCIALREPORT + '/incomeStatement/clientWise',
    {
      headers: {
        Authorization: req.headers.authorization
      },
      params: req.query
    }
  );
  return response;
};
export const FinancialReportService = {
  getOverallCommission,
  fetchDoctorPerformanceSummery,
  getTestWiseIncomeStatement,
  getDeptWiseIncomeStatement,
  fetchDeptWiseCollectionSummery,
  fetchDeptWIseDoctorPerformance,
  fetchTestWIseDoctorPerformance,
  clientWiseIncomeStatement
};
