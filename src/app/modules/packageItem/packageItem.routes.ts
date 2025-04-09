import { Router } from 'express';
import { packagesControllers } from './packageItem.controller';

const routes = Router();

routes.get('/', packagesControllers.getPackages);

routes.post('/', packagesControllers.createPackages);
routes.patch('/:id', packagesControllers.updatePackages);
routes.delete('/:id', packagesControllers.deletePackages);

export const PackageRoutes = { routes };
