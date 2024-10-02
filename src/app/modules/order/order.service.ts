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
  const response: IGenericResponse = await CoreService.post(Core_Service_Api_Path.ORDER, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
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
    params: req.query
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

const dewCollection = async (req: Request) => {
  const respone: IGenericResponse = await CoreService.patch(
    `${Core_Service_Api_Path.ORDER}/dewCollection/${req.params.oid}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return respone;
};

// get due details

const getDueDetailsFromDb = async (req: Request) => {
  const respone: IGenericResponse = await CoreService.get(
    `${Core_Service_Api_Path.ORDER}/due-details/`,
    {
      params: req.query
    }
  );
  return respone;
};

// income

const getIncomeStatement = async (req: Request) => {
  const response: IGenericResponse = await CoreService.post(
    `${Core_Service_Api_Path.ORDER}/income-statement`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};
const singleStatusChanger = async (req: Request) => {
  const respone: IGenericResponse = await CoreService.post(
    Core_Service_Api_Path.ORDER + '/statusChange/' + req.params.oid,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return respone;
};

const fetchOrderPostedBy = async (req: Request) => {
  const respone: IGenericResponse = await CoreService.get(
    Core_Service_Api_Path.ORDER + '/order-posted-by',

    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return respone;
};

export const OrderService = {
  dewCollection,
  fetchInvoice,
  postOrder,
  patchOrder,
  fetchSingleOrder,
  fetchAllOrder,
  getIncomeStatement,
  getDueDetailsFromDb,
  singleStatusChanger,
  fetchOrderPostedBy
};
