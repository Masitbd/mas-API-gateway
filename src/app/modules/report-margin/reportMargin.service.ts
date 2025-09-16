import { Request } from 'express';
import { CoreService } from '../../../shared/axios';
import { Core_Service_Api_Path } from '../../../enums/coreServiceApiPath';
import { IGenericResponse } from '../../../interfaces/common';

const post = async (req: Request) => {
  return (await CoreService.post(Core_Service_Api_Path.REPORT_MARGIN, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  })) as IGenericResponse;
};
const fetchAll = async (req: Request) => {
  return (await CoreService.get(Core_Service_Api_Path.REPORT_MARGIN, {
    headers: {
      Authorization: req.headers.authorization
    },
    params: req.query
  })) as IGenericResponse;
};

export const ReportMargin = { post, fetchAll };
