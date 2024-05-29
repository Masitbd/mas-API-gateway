import { Request } from 'express';
import { CoreService } from '../../../shared/axios';
import { Core_Service_Api_Path } from '../../../enums/coreServiceApiPath';
import { IGenericResponse } from '../../../interfaces/common';

const fetchSinlgeAccount = async (req: Request) => {
  const response: IGenericResponse = await CoreService.get(
    `${Core_Service_Api_Path.ACCOUNT}/${req.params.id}`
  );
  return response;
};

export const AccountService = { fetchSinlgeAccount };
