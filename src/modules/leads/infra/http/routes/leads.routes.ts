import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import LeadsController from '@modules/leads/infra/http/controllers/LeadsController';

const leadsRouter = Router();
const leadsController = new LeadsController();

leadsRouter.use(ensureAuthenticated);

leadsRouter.get('/', leadsController.index);

leadsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      plan_id: Joi.string().uuid().required(),
      client_id: Joi.string().uuid().required(),
    },
  }),
  leadsController.create,
);

leadsRouter.put(
  '/',
  celebrate({
    [Segments.QUERY]: {
      id: Joi.string().id().required(),
    },
    [Segments.BODY]: {
      plan_id: Joi.string().uuid().required(),
      client_id: Joi.string().uuid().required(),
    },
  }),
  leadsController.update,
);

leadsRouter.delete(
  '/',
  celebrate({
    [Segments.QUERY]: {
      id: Joi.string().id().required(),
    },
  }),
  leadsController.delete,
);

export default leadsRouter;
