import { Request } from 'express';
import { Core_Service_Api_Path } from '../../../enums/coreServiceApiPath';
import { IGenericResponse } from '../../../interfaces/common';
import { AccountService, CoreService } from '../../../shared/axios';
import { Account_Service_Api_Path } from '../../../enums/accountServiceApiPath';

const createJournal = async (req: Request) => {
  const response: IGenericResponse = await AccountService.post(
    Account_Service_Api_Path.JOURNAL,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

export const JournalService = {
  createJournal
};
