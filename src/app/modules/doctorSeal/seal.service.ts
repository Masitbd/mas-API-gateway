
import { Request } from 'express';
import { Core_Service_Api_Path } from '../../../enums/coreServiceApiPath';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';

const createDoctorSeal = async (req: Request) => {
  const response: IGenericResponse = await CoreService.post(
    Core_Service_Api_Path.SEAL,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const updateDoctorSeal = async (req: Request) => {
  const response: IGenericResponse = await CoreService.patch(
    `${Core_Service_Api_Path.SEAL + '/' + req.params.id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const deleteDoctorSeal = async (req: Request) => {
  const response: IGenericResponse = await CoreService.delete(
    Core_Service_Api_Path.SEAL + '/' + req.params.id,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const getSingleDoctorSeal = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(
    Core_Service_Api_Path.SEAL + '/' + req.params.id,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const getAllDoctorSeal = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(Core_Service_Api_Path.SEAL, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const DoctorSealService = {
    createDoctorSeal,
    updateDoctorSeal,
    getSingleDoctorSeal,
    getAllDoctorSeal,
    deleteDoctorSeal,
};