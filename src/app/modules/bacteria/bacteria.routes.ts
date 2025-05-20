import express from 'express';
import { BacteriaController } from './bacteria.controller';
const routes = express.Router();
routes.post('/', BacteriaController.createBacteria);
routes.patch('/:id', BacteriaController.updateBacteria);
routes.delete('/:id', BacteriaController.removeBacteria);
routes.get('/', BacteriaController.getAllBacteria);
routes.get('/:id', BacteriaController.getSingleBacteria);
export const BacteriaRoutes = { routes };
