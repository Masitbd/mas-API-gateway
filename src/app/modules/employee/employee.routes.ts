import express from 'express';
import { EmployeeCntroller } from './employee.controller';

const routes = express.Router();

routes.get('/', EmployeeCntroller.getAll);
routes.get('/:id', EmployeeCntroller.getSingle);
routes.post('/create-employee', EmployeeCntroller.create);
routes.patch('/:id', EmployeeCntroller.update);
routes.delete('/:id', EmployeeCntroller.remove);

export const EmployeeRoutes = { routes };
