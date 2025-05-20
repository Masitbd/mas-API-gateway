import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';

import { Indoor_Service_Api_Path } from '../../../enums/indoorServiceApiPath';
import { IndoorService } from '../../../shared/axios';

// const response: IGenericResponse = await AuthService.post('/auth/login', req.body);
// return response;

const getDeseaseFromDB = async (req: Request) => {
  const response: IGenericResponse = await IndoorService.get(`${Indoor_Service_Api_Path.DESEASE}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

//
const createDeseaseIntoDB = async (req: Request) => {
  // console.log(req.body, 'body in api');

  const response: IGenericResponse = await IndoorService.post(
    `${Indoor_Service_Api_Path.DESEASE}`,
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
  const response: IGenericResponse = await IndoorService.patch(
    `${Indoor_Service_Api_Path.DESEASE}/${req.params.id}`,
    req.body
  );
  return response;
};
const deleteDeseaseIntoDB = async (req: Request) => {
  const response: IGenericResponse = await IndoorService.delete(
    `${Indoor_Service_Api_Path.DESEASE}/${req.params.id}`
  );
  return response;
};

export const deseaseService = {
  getDeseaseFromDB,
  createDeseaseIntoDB,
  updateWorldIntoDB,
  deleteDeseaseIntoDB
};
