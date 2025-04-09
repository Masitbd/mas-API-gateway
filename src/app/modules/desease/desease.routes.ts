import { Router } from 'express';
import { deseaseControllers } from './desease.controller';

const routes = Router();

routes.get('/', deseaseControllers.getDesease);

routes.post('/', deseaseControllers.createDesease);
routes.patch('/:id', deseaseControllers.updateDesease);
routes.delete('/:id', deseaseControllers.deleteDesease);

export const DeseaseRoutes = { routes };
