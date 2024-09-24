import { Router } from 'express';
import { CompanyControllers } from './companyInfo.controller';

const routes = Router();
routes.get('/couldianry-sercet', CompanyControllers.getCloudinarySecret);
routes.get('/creatable', CompanyControllers.getCreatable);
routes.get('/default', CompanyControllers.getDefaultCompanyInfo);
routes.post('/', CompanyControllers.createCompanyInfo);
routes.get('/', CompanyControllers.getCompanyInfo);
routes.patch('/:id', CompanyControllers.updateCompanyInfo);
routes.delete('/:id', CompanyControllers.deleteSingleCompanyInfo);
routes.get('/:id', CompanyControllers.getSingleCompanyInfo);

export const CompnayInfoRoutes = { routes };
