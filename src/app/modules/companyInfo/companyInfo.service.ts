import { Request } from 'express';
import { Core_Service_Api_Path } from '../../../enums/coreServiceApiPath';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';

const createCompanyInfoIntoDB = async (req: Request) => {
  const response: IGenericResponse = await CoreService.post(
    Core_Service_Api_Path.COMPANYINFO,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

// get

const getCompanyInfoIntoDB = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(Core_Service_Api_Path.COMPANYINFO, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

//  update

const updateCompanyInfoIntoDB = async (req: Request) => {
  const response: IGenericResponse = await CoreService.patch(
    `${Core_Service_Api_Path.COMPANYINFO + '/' + req.params.id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

export const ComapnyInfoServices = {
  createCompanyInfoIntoDB,
  getCompanyInfoIntoDB,
  updateCompanyInfoIntoDB
};
