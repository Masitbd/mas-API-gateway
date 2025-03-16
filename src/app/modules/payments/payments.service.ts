import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';

import { Indoor_Service_Api_Path } from '../../../enums/indoorServiceApiPath';
import { IndoorService } from '../../../shared/axios';

const getPaymentsFromDB = async (req: Request) => {
  const response: IGenericResponse = await IndoorService.get(
    `${Indoor_Service_Api_Path.PAYMENTS}`,
    {
      headers: {
        Authorization: req.headers.authorization
      },
      params: req.query
    }
  );
  return response;
};

//
const createPaymentsIntoDB = async (req: Request) => {
  const response: IGenericResponse = await IndoorService.post(
    `${Indoor_Service_Api_Path.PAYMENTS}`,
    {
      headers: {
        Authorization: req.headers.authorization
      },
      params: req.query
    }
  );
  return response;
};

const updatePaymentsntoDB = async (req: Request) => {
  const response: IGenericResponse = await IndoorService.patch(
    `${Indoor_Service_Api_Path.PAYMENTS}`
  );
  return response;
};
const deletePaymentsIntoDB = async (req: Request) => {
  const response: IGenericResponse = await IndoorService.delete(
    `${Indoor_Service_Api_Path.PAYMENTS}`
  );
  return response;
};

export const PaymentsService = {
  getPaymentsFromDB,
  createPaymentsIntoDB,
  updatePaymentsntoDB,
  deletePaymentsIntoDB
};
