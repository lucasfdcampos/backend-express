import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import LeadsController from '@modules/leads/infra/http/controllers/LeadsController';

const leadsRouter = Router();
const leadsController = new LeadsController();

leadsRouter.use(ensureAuthenticated);

leadsRouter.get('/', leadsController.index);

leadsRouter.post('/', leadsController.create);

export default leadsRouter;
