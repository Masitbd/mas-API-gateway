import express from 'express';
import { TransactionController } from './transaction.controller';

const routes = express.Router();

routes.get('/', TransactionController.getAllTransaction);

routes.post('/', TransactionController.createTransaction);

routes.get('/:id', TransactionController.getSingleTransaction);

export const TransactionRoutes = { routes };
