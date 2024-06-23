import { Request } from 'express';
import { CoreService } from '../../../shared/axios';
import { Core_Service_Api_Path } from '../../../enums/coreServiceApiPath';
import { IGenericResponse } from '../../../interfaces/common';

const post = async (req: Request) => {
  return (await CoreService.post(Core_Service_Api_Path.REPORT_Type, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  })) as IGenericResponse;
};
const patch = async (req: Request) => {
  return (await CoreService.patch(
    Core_Service_Api_Path.REPORT_Type + '/' + req.params.id,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  )) as IGenericResponse;
};

const fetchSingle = async (req: Request) => {
  return (await CoreService.get(Core_Service_Api_Path.REPORT_Type + '/' + req.params.id, {
    headers: {
      Authorization: req.headers.authorization
    }
  })) as IGenericResponse;
};

const fetchAll = async (req: Request) => {
  return (await CoreService.get(Core_Service_Api_Path.REPORT_Type, {
    headers: {
      Authorization: req.headers.authorization
    },
    params: req.query
  })) as IGenericResponse;
};

export const ReportTypeService = { post, patch, fetchSingle, fetchAll };
