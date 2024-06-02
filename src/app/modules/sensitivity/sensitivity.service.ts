import { Request } from 'express';
import { Core_Service_Api_Path } from '../../../enums/coreServiceApiPath';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';

const createSensitivity = async (req: Request) => {
  const response: IGenericResponse = await CoreService.post(
    Core_Service_Api_Path.SENSITIVITY,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};
const updateSensitivity = async (req: Request) => {
  const response: IGenericResponse = await CoreService.patch(
    `${Core_Service_Api_Path.SENSITIVITY}/${req.params.id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const deleteSensitivity = async (req: Request) => {
  const response: IGenericResponse = await CoreService.delete(
    `${Core_Service_Api_Path.SENSITIVITY}/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const getAllSensitivity = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(Core_Service_Api_Path.SENSITIVITY, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getSingleSensitivity = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(
    `${Core_Service_Api_Path.SENSITIVITY}/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

export const SensitivityService = {
  createSensitivity,
  updateSensitivity,
  deleteSensitivity,
  getSingleSensitivity,
  getAllSensitivity
};
