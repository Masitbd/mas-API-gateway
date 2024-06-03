import { Request } from 'express';
import { AuthService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const patchProfile = async (req: Request) => {
  const response: IGenericResponse = await AuthService.patch(
    `/profile/${req.params.uuid}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const fetchSingleProfile = async (req: Request) => {
  const response: IGenericResponse = await AuthService.get(`/profile`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const ProfileService = { patchProfile, fetchSingleProfile };
