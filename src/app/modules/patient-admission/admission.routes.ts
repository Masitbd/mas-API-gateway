import { Router } from 'express';
import { AdmissionControllers } from './admission.controller';

const routes = Router();

routes.get('/', AdmissionControllers.getAdmissions);

routes.post('/', AdmissionControllers.createAdmissions);
routes.get('/:id', AdmissionControllers.getSignleAdmissions);
routes.put('/:id', AdmissionControllers.updateAdmissions);
routes.delete('/:id', AdmissionControllers.deleteAdmissions);

export const AdmissionRoutes = { routes };
