import express from 'express';

import { PatientController } from './patient.controller';

const routes = express.Router();

routes.get('/', PatientController.getAllPatient);

routes.post('/', PatientController.createPatient);

routes.get('/:id', PatientController.getSinglePatient);

routes.patch('/', PatientController.updatePatient);

// routes.delete('/:id', PatientController.deletePatientController);

export const PatientRoutes = { routes };
