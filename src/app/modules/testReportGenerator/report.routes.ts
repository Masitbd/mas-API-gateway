import express from 'express';
import { ReportController } from './report.controller';
const routes = express.Router();

routes.post('/', ReportController.create);
routes.patch('/', ReportController.update);
routes.get('/:oid', ReportController.getSingle);
routes.get('/', ReportController.getAll);

export const ReportRoutes = {
  routes
};
