import express from 'express';
import { ReportMarginContorller } from './reportMargin.controller';
const routes = express.Router();

routes.post('/', ReportMarginContorller.create);
routes.get('/', ReportMarginContorller.getAll);

export const ReportMarginRoutes = { routes };
