import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';

import { Indoor_Service_Api_Path } from '../../../enums/indoorServiceApiPath';
import { IndoorService } from '../../../shared/axios';

const getbedsFromDB = async (req: Request) => {
  const response: IGenericResponse = await IndoorService.get(`${Indoor_Service_Api_Path.BEDS}`, {
    headers: {
      Authorization: req.headers.authorization
    },
    params: req.query
  });
  return response;
};
const getbedsForAdminFromDB = async (req: Request) => {
  const response: IGenericResponse = await IndoorService.get(
    `${Indoor_Service_Api_Path.BEDS}/for-admin`,
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
const createBedsIntoDB = async (req: Request) => {
  const response: IGenericResponse = await IndoorService.post(
    `${Indoor_Service_Api_Path.BEDS}`,

    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      },
      params: req.query
    }
  );
  return response;
};

const updateBedIntoDB = async (req: Request) => {
  const response: IGenericResponse = await IndoorService.patch(
    `${Indoor_Service_Api_Path.BEDS}/${req.params.id}`,
    req.body
  );
  return response;
};
const deleteBedsIntoDB = async (req: Request) => {
  const response: IGenericResponse = await IndoorService.delete(
    `${Indoor_Service_Api_Path.BEDS}/${req.params.id}`
  );
  return response;
};

export const BedService = {
  getbedsFromDB,
  getbedsForAdminFromDB,
  createBedsIntoDB,
  updateBedIntoDB,
  deleteBedsIntoDB
};
