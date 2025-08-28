import express from 'express';
import { ReportTypeController } from './reportType.controller';
const routes = express.Router();

routes.post('/', ReportTypeController.create);
routes.patch('/:id', ReportTypeController.update);
routes.get('/:id', ReportTypeController.getSingle);
routes.get('/', ReportTypeController.getAll);
routes.delete('/:id', ReportTypeController.RemoveReportType);

export const ReportTypeRoutes = { routes };
