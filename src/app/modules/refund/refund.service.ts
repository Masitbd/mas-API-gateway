import { Request } from 'express';
import { Core_Service_Api_Path } from '../../../enums/coreServiceApiPath';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';

const post = async (req: Request) => {
  const response: IGenericResponse = await CoreService.post(
    Core_Service_Api_Path.REFUND,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const getAl = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(Core_Service_Api_Path.REFUND, {
    headers: {
      Authorization: req.headers.authorization
    },
    params: req.query
  });
  return response;
};

const getSingle = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(
    `${Core_Service_Api_Path.REFUND}/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      },
      params: req.query
    }
  );
  return response;
};

export const RefundService = {
  post,
  getAl,
  getSingle
};
