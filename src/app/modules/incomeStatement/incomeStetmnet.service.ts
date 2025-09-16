import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';
import { Core_Service_Api_Path } from '../../../enums/coreServiceApiPath';

const getEmployeeIncomeStatementFromDB = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(
    `${Core_Service_Api_Path.INCOMESTATEMENT}`,
    {
      headers: {
        Authorization: req.headers.authorization
      },
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
      headers: {
        Authorization: req.headers.authorization
      },
      params: req.query
    }
  );
  return response;
};

const getLastTwentyEightDasysPaidAmountFromDB = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(
    `${Core_Service_Api_Path.INCOMESTATEMENT}/last-paid`
  );
  return response;
};

// ! due collection statement
const getDueCollectionStatementFromDB = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(
    `${Core_Service_Api_Path.INCOMESTATEMENT}/due-collection-statement`,
    {
      headers: {
        Authorization: req.headers.authorization
      },
      params: req.query
    }
  );
  return response;
};

export const IncomeServices = {
  getEmployeeIncomeStatementFromDB,
  getEmployeeIncomeStatementSummeryFromDB,
  getLastTwentyEightDasysPaidAmountFromDB,
  getDueCollectionStatementFromDB
};
