import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';

import { Indoor_Service_Api_Path } from '../../../enums/indoorServiceApiPath';
import { IndoorService } from '../../../shared/axios';

const getAdmissionsFromDB = async (req: Request) => {
  const response: IGenericResponse = await IndoorService.get(
    `${Indoor_Service_Api_Path.ADMISSION}`,
    {
      headers: {
        Authorization: req.headers.authorization
      },
      params: req.query
    }
  );
  return response;
};
const getSingleAdmissionsFromDB = async (req: Request) => {
  const response: IGenericResponse = await IndoorService.get(
    `${Indoor_Service_Api_Path.ADMISSION}/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

//
const createAdmissionsIntoDB = async (req: Request) => {
  const response: IGenericResponse = await IndoorService.post(
    `${Indoor_Service_Api_Path.ADMISSION}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};
// release
const relesaseAdmitPatientIntoDB = async (req: Request) => {
  const response: IGenericResponse = await IndoorService.post(
    `${Indoor_Service_Api_Path.ADMISSION}/release`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};
const transferPatientBeDIntoDB = async (req: Request) => {
  const response: IGenericResponse = await IndoorService.patch(
    `${Indoor_Service_Api_Path.ADMISSION}/transfer`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const updateAdmissionsntoDB = async (req: Request) => {
  const response: IGenericResponse = await IndoorService.patch(
    `${Indoor_Service_Api_Path.ADMISSION}`
  );
  return response;
};
const deleteAdmissionsIntoDB = async (req: Request) => {
  const response: IGenericResponse = await IndoorService.delete(
    `${Indoor_Service_Api_Path.ADMISSION}`
  );
  return response;
};

export const AdmissionsService = {
  getAdmissionsFromDB,
  getSingleAdmissionsFromDB,
  createAdmissionsIntoDB,
  relesaseAdmitPatientIntoDB,
  transferPatientBeDIntoDB,
  updateAdmissionsntoDB,
  deleteAdmissionsIntoDB
};
