import { Router } from 'express';
import { BedControllers } from './bed.controller';

const routes = Router();

routes.get('/', BedControllers.getBeds);
routes.get('/for-admin', BedControllers.getBedsForAdmin);

routes.post('/', BedControllers.createBed);
routes.put('/:id', BedControllers.updateBed);
routes.delete('/:id', BedControllers.deleteBed);

export const BedRoutes = { routes };
