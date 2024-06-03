import express from 'express';
import { DepartmentController } from './departments.controller';
const routes = express.Router();
routes.post('/', DepartmentController.createDepartment);
routes.get('/:id', DepartmentController.getSingleDepartment);
routes.get('/', DepartmentController.getAllDepartment);
routes.patch('/:id', DepartmentController.updateDepartment);
routes.delete('/:id', DepartmentController.deleteDepartment);

export const DepartmentRoutes = { routes };
