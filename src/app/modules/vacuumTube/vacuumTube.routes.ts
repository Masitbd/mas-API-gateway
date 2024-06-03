import express from 'express';
import { VacuumTubeController } from './vacuumTube.controller';

const routes = express.Router();

routes.get('/', VacuumTubeController.getAllVacuumTube);

routes.post(
  '/',

  VacuumTubeController.createVacuumTube
);

routes.get('/:id', VacuumTubeController.getSingleVacuumTube);

routes.patch('/:id', VacuumTubeController.updateVacuumTube);

routes.delete('/:id', VacuumTubeController.deleteVacuumTube);

export const VacuumTubeRoutes = { routes };
