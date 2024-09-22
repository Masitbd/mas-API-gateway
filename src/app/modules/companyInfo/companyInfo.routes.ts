import { Router } from 'express';
import { CompanyControllers } from './companyInfo.controller';

const routes = Router();

routes.post('/', CompanyControllers.createCompanyInfo);
routes.get('/', CompanyControllers.getCompanyInfo);
routes.patch('/:id', CompanyControllers.updateCompanyInfo);

export const CompnayInfoRoutes = { routes };
