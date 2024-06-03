import express from 'express';
import { SpecimenController } from './specimen.controller';

const routes = express.Router();

routes.get('/', SpecimenController.getAllSpecimen);

routes.post('/', SpecimenController.createSpecimen);

routes.get('/:id', SpecimenController.getSingleSpecimen);

routes.patch('/:id', SpecimenController.updateSpecimen);

routes.delete('/:id', SpecimenController.deleteSpecimen);

export const SpecimenRoutes = { routes };
