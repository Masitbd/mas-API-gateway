import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';
import { Core_Service_Api_Path } from '../../../enums/coreServiceApiPath';

const getEmployeeIncomeStatementFromDB = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(
    `${Core_Service_Api_Path.INCOMESTATEMENT}`,
    {
      params: req.query
    }
  );
  return response;
};

//
const getEmployeeIncomeStatementSummeryFromDB = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(
    `${Core_Service_Api_Path.INCOMESTATEMENT}/summery`,
    {
      params: req.query
    }
  );
  return response;
};

export const IncomeServices = {
  getEmployeeIncomeStatementFromDB,
  getEmployeeIncomeStatementSummeryFromDB
};
