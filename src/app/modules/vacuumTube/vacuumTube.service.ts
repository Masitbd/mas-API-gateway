import { Request } from 'express';
import { Core_Service_Api_Path } from '../../../enums/coreServiceApiPath';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';

const createVacuumTube = async (req: Request) => {
  const response: IGenericResponse = await CoreService.post(
    Core_Service_Api_Path.TESTTUBE,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};
const updateVacuumTube = async (req: Request) => {
  const response: IGenericResponse = await CoreService.patch(
    `${Core_Service_Api_Path.TESTTUBE}/${req.params.id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const deleteVacuumTube = async (req: Request) => {
  const response: IGenericResponse = await CoreService.delete(
    `${Core_Service_Api_Path.TESTTUBE}/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const getAllVacuumTube = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(Core_Service_Api_Path.TESTTUBE, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getSingleVacuumTube = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(
    `${Core_Service_Api_Path.TESTTUBE}/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

export const VacuumTubeService = {
  createVacuumTube,
  updateVacuumTube,
  deleteVacuumTube,
  getSingleVacuumTube,
  getAllVacuumTube
};
