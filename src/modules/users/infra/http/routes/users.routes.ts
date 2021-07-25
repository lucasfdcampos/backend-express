import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import UsersController from '@modules/users/infra/http/controllers/UsersController';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  usersController.create,
);

usersRouter.put(
  '/',
  celebrate({
    [Segments.QUERY]: {
      id: Joi.string().id().required(),
    },
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  usersController.update,
);

usersRouter.delete(
  '/',
  celebrate({
    [Segments.QUERY]: {
      id: Joi.string().id().required(),
    },
  }),
  usersController.delete,
);

export default usersRouter;
