import { Request } from 'express';
import { FileUploadHelper } from '../../../helpers/FileUploadHelper';
import { ICloudinaryResponse, IUploadFile } from '../../../interfaces/file';
import { AuthService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const postUser = async (req: Request) => {
  const response: IGenericResponse = await AuthService.post('/user', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const patchUser = async (req: Request) => {
  const Response: IGenericResponse = await AuthService.patch(`/user/${req.params.uuid}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return Response;
};

const fetchAllUser = async (req: Request) => {
  const response: IGenericResponse = await AuthService.get('/user/', {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
const fetchSingleUser = async (req: Request) => {
  const response: IGenericResponse = await AuthService.get(`/user/${req.params.uuid}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const UserService = { postUser, patchUser, fetchSingleUser, fetchAllUser };
