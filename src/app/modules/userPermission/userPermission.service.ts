import { Request } from 'express';
import { AuthService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const patchUserPermission = async (req: Request) => {
  const response: IGenericResponse = await AuthService.patch(
    `/userPermission/${req.params.uuid}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

export const UserPermissionService = { patchUserPermission };
