import { Request } from 'express';
import { Core_Service_Api_Path } from '../../../enums/coreServiceApiPath';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';

const createPatient = async (req: Request) => {
  const response: IGenericResponse = await CoreService.post(
    Core_Service_Api_Path.PATIENT,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};
const updatePatient = async (req: Request) => {
  const response: IGenericResponse = await CoreService.patch(
    `${Core_Service_Api_Path.PATIENT}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

// const deletePatient = async (req: Request) => {
//   const response: IGenericResponse = await CoreService.delete(
//     `${Core_Service_Api_Path.PATIENT}/${req.params.id}`,
//     {
//       headers: {
//         Authorization: req.headers.authorization
//       }
//     }
//   );
//   return response;
// };

const getAllPatient = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(Core_Service_Api_Path.PATIENT, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getSinglePatient = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(
    `${Core_Service_Api_Path.PATIENT}/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

export const PatientService = {
  createPatient,
  updatePatient,
  //   deletePatient,
  getSinglePatient,
  getAllPatient
};
