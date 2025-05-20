import express from 'express';
import { JournalService } from './journalEntry.service';

const routes = express.Router();

routes.post(
  '/',

  JournalService.createJournal
);
// routes.get('/', ConditionController.getAllCondition);

// routes.get('/:id', ConditionController.getSingleCondition);

// routes.patch(
//   '/:id',

//   ConditionController.updateCondition
// );

// routes.delete('/:id', ConditionController.deleteCondition);

export const ConditionRoutes = { routes };
