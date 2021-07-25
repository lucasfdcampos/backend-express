import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import multer from 'multer';

import uploadConfig from '@config/upload';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import ClientsController from '@modules/clients/infra/http/controllers/ClientsController';
import ClientsAvatarController from '@modules/clients/infra/http/controllers/ClientsAvatarController';

const clientsRouter = Router();
const clientsController = new ClientsController();
const clientsAvatarController = new ClientsAvatarController();

const upload = multer(uploadConfig);

clientsRouter.use(ensureAuthenticated);

clientsRouter.get('/', clientsController.index);

clientsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      cpf: Joi.string().required(),
      cep: Joi.string().required(),
      adress: Joi.string().required(),
      city: Joi.string().required(),
      uf: Joi.string().required(),
    },
  }),
  clientsController.create,
);

clientsRouter.patch(
  '/avatar',
  celebrate({
    [Segments.QUERY]: {
      id: Joi.string().id().required(),
    },
  }),
  upload.single('avatar'),
  clientsAvatarController.update,
);

export default clientsRouter;
