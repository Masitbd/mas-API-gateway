import express from 'express';
import { TestController } from './test.controller';
const routes = express.Router();

routes.post('/', TestController.createTest);
routes.patch('/:id', TestController.updateTest);
routes.delete('/:id', TestController.removeTest);
routes.get('/', TestController.getAllTest);
routes.get('/:id', TestController.getSingleTest);
export const TesRoutes = { routes };
