import express from 'express';
import { PdrvController } from './prdv.controller';
const routes = express.Router();

routes.get('/', PdrvController.getAllPdrv);

routes.post(
  '/',

  PdrvController.createPdrv
);

routes.get('/:id', PdrvController.getSinglePdrv);

routes.patch(
  '/:id',

  PdrvController.updatePdrv
);

routes.delete('/:id', PdrvController.deletePdrv);

export const PdrvRoutes = { routes };
