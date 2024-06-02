import express from 'express';
import { DoctorController } from './doctor.controller';

const routes = express.Router();

routes.get('/', DoctorController.getAllDoctor);

routes.get('/:id', DoctorController.getSingleDoctor);

routes.post(
  '/',

  DoctorController.createDoctor
);

routes.patch(
  '/:id',

  DoctorController.updateDoctor
);

routes.delete('/:id', DoctorController.deleteDoctor);

export const DoctorRoutes = {
  routes
};
