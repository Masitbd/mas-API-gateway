import { Router } from 'express';
import { AdmissionControllers } from './admission.controller';

const routes = Router();

routes.get('/', AdmissionControllers.getAdmissions);
routes.get('/today-admit', AdmissionControllers.getTodayAdmissions);
routes.get('/admit-overperiod', AdmissionControllers.getAdmissionsOVerPeriod);

routes.post('/', AdmissionControllers.createAdmissions);
routes.post('/release', AdmissionControllers.releaseAdmit);
routes.patch('/transfer', AdmissionControllers.transferPatientBed);
routes.patch('/add-service', AdmissionControllers.addPateintService);
routes.get('/:id', AdmissionControllers.getSignleAdmissions);
routes.put('/:id', AdmissionControllers.updateAdmissions);
routes.delete('/:id', AdmissionControllers.deleteAdmissions);

export const AdmissionRoutes = { routes };
