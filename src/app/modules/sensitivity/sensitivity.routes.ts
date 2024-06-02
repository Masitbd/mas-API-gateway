import express from 'express';
import { SensitivityController } from './sensitivity.controller';

const routes = express.Router();

routes.get('/', SensitivityController.getAllSensitivity);

routes.post('/', SensitivityController.createSensitivity);

routes.get('/:id', SensitivityController.getSingleSensitivity);

routes.patch('/:id', SensitivityController.updateSensitivity);

routes.delete('/:id', SensitivityController.deleteSensitivity);

export const SensitivityRoutes = { routes };
