import { Core_Service_Api_Path } from '../../../enums/coreServiceApiPath';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';
import { Request } from 'express';

const post = async (req: Request) => {
  const response: IGenericResponse = await CoreService.post(
    Core_Service_Api_Path.COMMENT,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const patch = async (req: Request) => {
  const response: IGenericResponse = await CoreService.patch(
    `${Core_Service_Api_Path.COMMENT + '/' + req.params.id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const reomve = async (req: Request) => {
  const response: IGenericResponse = await CoreService.delete(
    Core_Service_Api_Path.COMMENT + '/' + req.params.id,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const fetchSingle = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(
    Core_Service_Api_Path.COMMENT + '/' + req.params.id,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const fetch = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(Core_Service_Api_Path.COMMENT, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const CommentService = {
  post,
  patch,
  reomve,
  fetch,
  fetchSingle
};
