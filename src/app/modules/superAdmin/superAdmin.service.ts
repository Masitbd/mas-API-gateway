import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { AuthService } from '../../../shared/axios';

const postSuperAdmin = async (req: Request) => {
  const response: IGenericResponse = await AuthService.post('/superAdmin');
  return response;
};

export const SuperAdminService = { postSuperAdmin };
