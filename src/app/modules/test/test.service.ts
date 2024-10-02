import { Request } from 'express';
import { CoreService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const postTest = async (req: Request) => {
  const response: IGenericResponse = await CoreService.post('/test', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const pathchTest = async (req: Request) => {
  const response: IGenericResponse = await CoreService.patch(`/test/${req.params.id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const deleteTest = async (req: Request) => {
  const response: IGenericResponse = await CoreService.delete(`/test/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    },
    params: req.query
  });

  return response;
};

const fetchAllTest = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get('/test', {
    headers: {
      Authorization: req.headers.authorization
    },
    params: req.query
  });
  return response;
};

const fetchSingleTest = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(`/test/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const TestService = { postTest, pathchTest, deleteTest, fetchAllTest, fetchSingleTest };
