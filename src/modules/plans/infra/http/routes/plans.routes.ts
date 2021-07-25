import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import PlansController from '@modules/plans/infra/http/controllers/PlansController';

const plansRouter = Router();
const plansController = new PlansController();

plansRouter.use(ensureAuthenticated);

plansRouter.get('/', plansController.index);

plansRouter.post('/', plansController.create);

export default plansRouter;
