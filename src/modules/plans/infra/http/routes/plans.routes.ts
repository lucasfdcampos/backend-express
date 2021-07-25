import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import PlansController from '@modules/plans/infra/http/controllers/PlansController';

const plansRouter = Router();
const plansController = new PlansController();

plansRouter.use(ensureAuthenticated);

plansRouter.get('/', plansController.index);

plansRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      available: Joi.boolean().default(true),
    },
  }),
  plansController.create,
);

export default plansRouter;
