import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';

import { Indoor_Service_Api_Path } from '../../../enums/indoorServiceApiPath';
import { IndoorService } from '../../../shared/axios';

const getIndoorIncomeLedgerFromDB = async (req: Request) => {
  const response: IGenericResponse = await IndoorService.get(`${Indoor_Service_Api_Path.FINANCE}`, {
    headers: {
      Authorization: req.headers.authorization
    },
    params: req.query
  });
  return response;
};
const getIndoorDueLedgerFromDB = async (req: Request) => {
  const response: IGenericResponse = await IndoorService.get(
    `${Indoor_Service_Api_Path.FINANCE}/due-collection`,
    {
      headers: {
        Authorization: req.headers.authorization
      },
      params: req.query
    }
  );
  return response;
};
const getIndoorDueCollectionLedgerFromDB = async (req: Request) => {
  const response: IGenericResponse = await IndoorService.get(
    `${Indoor_Service_Api_Path.FINANCE}/due-collection-statement`,
    {
      headers: {
        Authorization: req.headers.authorization
      },
      params: req.query
    }
  );
  return response;
};
const getIndoorEmpDetailsLedgerFromDB = async (req: Request) => {
  const response: IGenericResponse = await IndoorService.get(
    `${Indoor_Service_Api_Path.FINANCE}/daily-collection-details`,
    {
      headers: {
        Authorization: req.headers.authorization
      },
      params: req.query
    }
  );
  return response;
};
const getPateintHospitalBillSummeryFromDB = async (req: Request) => {
  const response: IGenericResponse = await IndoorService.get(
    `${Indoor_Service_Api_Path.FINANCE}/hospital-bill-summery/${req.params.id}`,
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

const getPateintHospitalBillDetailsFromDB = async (req: Request) => {
  const response: IGenericResponse = await IndoorService.get(
    `${Indoor_Service_Api_Path.FINANCE}/hospital-bill-details/${req.params.id}`,
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

const getPateintDoctorBillsFromDB = async (req: Request) => {
  const response: IGenericResponse = await IndoorService.get(
    `${Indoor_Service_Api_Path.FINANCE}/doctor-bills/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      },
      params: req.query
    }
  );
  return response;
};

export const IndoorFinanceService = {
  getIndoorIncomeLedgerFromDB,
  getIndoorDueCollectionLedgerFromDB,
  getIndoorDueLedgerFromDB,
  getIndoorEmpDetailsLedgerFromDB,
  getPateintHospitalBillSummeryFromDB,
  getPateintHospitalBillDetailsFromDB,
  getPateintDoctorBillsFromDB
};
