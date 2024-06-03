import express from 'express';
import { HospitalGroupController } from './hospitalGroup.controller';

const routes = express.Router();

routes.post(
  '/create-hospitalGroup',

  HospitalGroupController.createHospitalGroup
);
routes.get('/:id', HospitalGroupController.getSingleHospitalGroup);
routes.get('/', HospitalGroupController.getAllHospitalGroup);
routes.patch(
  '/:id',

  HospitalGroupController.updateHospitalGroup
);
routes.delete('/:id', HospitalGroupController.deleteHospitalGroup);

export const HospitalGroupRoutes = { routes };
