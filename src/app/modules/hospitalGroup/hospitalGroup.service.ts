import { Request } from 'express';
import { Core_Service_Api_Path } from '../../../enums/coreServiceApiPath';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';

const createHospitalGroup = async (req: Request) => {
  const response: IGenericResponse = await CoreService.post(
    `${Core_Service_Api_Path.HOSPITALGROUP}/create-hospitalGroup`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};
const updateHospitalGroup = async (req: Request) => {
  const response: IGenericResponse = await CoreService.patch(
    `${Core_Service_Api_Path.HOSPITALGROUP}/${req.params.id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const deleteHospitalGroup = async (req: Request) => {
  const response: IGenericResponse = await CoreService.delete(
    `${Core_Service_Api_Path.HOSPITALGROUP}/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const getAllHospitalGroup = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(Core_Service_Api_Path.HOSPITALGROUP, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getSingleHospitalGroup = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(
    `${Core_Service_Api_Path.HOSPITALGROUP}/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

export const HospitalGroupService = {
  createHospitalGroup,
  updateHospitalGroup,
  deleteHospitalGroup,
  getSingleHospitalGroup,
  getAllHospitalGroup
};
