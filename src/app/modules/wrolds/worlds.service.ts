import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';

import { Indoor_Service_Api_Path } from '../../../enums/indoorServiceApiPath';
import { IndoorService } from '../../../shared/axios';

// const response: IGenericResponse = await AuthService.post('/auth/login', req.body);
// return response;

const getWorldsFromDB = async (req: Request) => {
  const response: IGenericResponse = await IndoorService.get(`${Indoor_Service_Api_Path.WORLDS}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

//
const createWorldsIntoDB = async (req: Request) => {
  console.log(req.body, 'body in api');

  const response: IGenericResponse = await IndoorService.post(
    `${Indoor_Service_Api_Path.WORLDS}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const updateWorldIntoDB = async (req: Request) => {
  const response: IGenericResponse = await IndoorService.patch(`${Indoor_Service_Api_Path.WORLDS}`);
  return response;
};
const deleteWorldsIntoDB = async (req: Request) => {
  const response: IGenericResponse = await IndoorService.delete(
    `${Indoor_Service_Api_Path.WORLDS}`
  );
  return response;
};

export const WorldsService = {
  getWorldsFromDB,
  createWorldsIntoDB,
  updateWorldIntoDB,
  deleteWorldsIntoDB
};
