import { Request } from 'express';
import { Core_Service_Api_Path } from '../../../enums/coreServiceApiPath';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';

const createDoctor = async (req: Request) => {
  const response: IGenericResponse = await CoreService.post(
    Core_Service_Api_Path.DOCTOR,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};
const updateDoctor = async (req: Request) => {
  const response: IGenericResponse = await CoreService.patch(
    `${Core_Service_Api_Path.DOCTOR}/${req.params.id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const deleteDoctor = async (req: Request) => {
  const response: IGenericResponse = await CoreService.delete(
    `${Core_Service_Api_Path.DOCTOR}/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const getAllDoctor = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(Core_Service_Api_Path.DOCTOR, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getSingleDoctor = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(
    `${Core_Service_Api_Path.DOCTOR}/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

export const DoctorService = {
  createDoctor,
  updateDoctor,
  deleteDoctor,
  getSingleDoctor,
  getAllDoctor
};
