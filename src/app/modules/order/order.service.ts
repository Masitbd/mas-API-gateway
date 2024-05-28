import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';
import { Core_Service_Api_Path } from '../../../enums/coreServiceApiPath';

const fetchInvoice = async (req: Request) => {
  const respone: IGenericResponse = await CoreService.get(
    `${Core_Service_Api_Path.ORDER}/invoice/${req.params.oid}`
  );
  return respone;
};

const postOrder = async (req: Request) => {
  const respone: IGenericResponse = await CoreService.post(Core_Service_Api_Path.ORDER, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return respone;
};

const patchOrder = async (req: Request) => {
  const respone: IGenericResponse = await CoreService.patch(
    `${Core_Service_Api_Path.ORDER}/${req.params.id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return respone;
};
const fetchAllOrder = async (req: Request) => {
  const respone: IGenericResponse = await CoreService.get(Core_Service_Api_Path.ORDER, {
    headers: {
      Authorization: req.headers.authorization
    },
    params: req.params
  });
  return respone;
};

const fetchSingleOrder = async (req: Request) => {
  const respone: IGenericResponse = await CoreService.get(
    `${Core_Service_Api_Path.ORDER}/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return respone;
};

export const OrderService = {
  fetchInvoice,
  postOrder,
  patchOrder,
  fetchSingleOrder,
  fetchAllOrder
};
