import { Router } from 'express';
import { WorldControllers } from './worlds.controller';

const routes = Router();

routes.get('/', WorldControllers.getWorlds);

routes.post('/', WorldControllers.createWorlds);
routes.patch('/:id', WorldControllers.updateWorlds);
routes.delete('/:id', WorldControllers.deleteWorlds);
routes.get('/:id', WorldControllers.getSingleWord);

export const WorldRoutes = { routes };
