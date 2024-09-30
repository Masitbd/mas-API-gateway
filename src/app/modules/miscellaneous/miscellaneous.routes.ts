import express from 'express';
import { MiscellaneousController } from './miscellaneous.controller';

const routes = express.Router();

routes.post('/', MiscellaneousController.create);
routes.get('/:id', MiscellaneousController.getsingle);
routes.get('/page/margin-data', MiscellaneousController.getMarginData);
routes.get('/', MiscellaneousController.getAll);
routes.patch('/:id', MiscellaneousController.update);
routes.delete('/:id', MiscellaneousController.Remove);

export const MiscellaneousRoutes = { routes };
