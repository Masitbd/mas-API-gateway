import express from 'express';
import { TestReportController } from './testReport.controller';

const routes = express.Router();

routes.get('/', TestReportController.getAllTestReport);

routes.post('/', TestReportController.createTestReport);
routes.post('/print', TestReportController.getSingleTestReportPrint);

routes.get('/:id', TestReportController.getSingleTestReport);

routes.patch('/:id', TestReportController.updateTestReport);

routes.delete('/:id', TestReportController.deleteTestReport);

export const TestReportRoutes = { routes };
