import { Request } from 'express';
import { Core_Service_Api_Path } from '../../../enums/coreServiceApiPath';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';

const createPdrv = async (req: Request) => {
  const response: IGenericResponse = await CoreService.post(Core_Service_Api_Path.PDRV, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
const updatePdrv = async (req: Request) => {
  const response: IGenericResponse = await CoreService.patch(
    `${Core_Service_Api_Path.PDRV}/${req.params.id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const deletePdrv = async (req: Request) => {
  const response: IGenericResponse = await CoreService.delete(
    `${Core_Service_Api_Path.PDRV}/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const getAllPdrv = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(Core_Service_Api_Path.PDRV, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getSinglePdrv = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(
    `${Core_Service_Api_Path.PDRV}/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

export const PdrvService = {
  createPdrv,
  updatePdrv,
  deletePdrv,
  getSinglePdrv,
  getAllPdrv
};
