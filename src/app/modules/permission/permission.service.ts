import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { AuthService } from '../../../shared/axios';
const postPermission = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await AuthService.post('/permission', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const patchPermission = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await AuthService.patch(
    `/permission/${req.params.id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return response;
};

const deletePermission = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await AuthService.delete(
    `/permission/${req.params.id}`,

    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return response;
};

const fetchSinglePermission = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await AuthService.get(`/permission/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const fetchAllPermissions = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await AuthService.get(`/permission`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};
export const PermissionService = {
  postPermission,
  patchPermission,
  deletePermission,
  fetchSinglePermission,
  fetchAllPermissions
};
