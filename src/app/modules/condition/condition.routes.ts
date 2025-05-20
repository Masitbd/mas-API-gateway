import express from 'express';
import { ConditionController } from './condition.controller';

const routes = express.Router();

routes.post(
  '/',

  ConditionController.createCondition
);
routes.get('/', ConditionController.getAllCondition);

routes.get('/:id', ConditionController.getSingleCondition);

routes.patch(
  '/:id',

  ConditionController.updateCondition
);

routes.delete('/:id', ConditionController.deleteCondition);

export const ConditionRoutes = { routes };
