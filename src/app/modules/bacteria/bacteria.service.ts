import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';
import { Core_Service_Api_Path } from '../../../enums/coreServiceApiPath';

const postBacteria = async (req: Request) => {
  const response: IGenericResponse = await CoreService.post('/bacteria', req.body);

  return response;
};
const patchBacteria = async (req: Request) => {
  const response: IGenericResponse = await CoreService.patch(
    `${Core_Service_Api_Path.BACTERIA}/${req.params.id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const deleteBacteria = async (req: Request) => {
  const response: IGenericResponse = await CoreService.delete(
    `${Core_Service_Api_Path.BACTERIA}/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const fetchAll = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(Core_Service_Api_Path.BACTERIA, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const fetchSingle = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(
    `${Core_Service_Api_Path.BACTERIA}/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

export const BacteriaService = {
  postBacteria,
  patchBacteria,
  deleteBacteria,
  fetchAll,
  fetchSingle
};
