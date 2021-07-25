import { Router } from 'express';
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

clientsRouter.post('/', clientsController.create);

clientsRouter.patch(
  '/avatar',
  upload.single('avatar'),
  clientsAvatarController.update,
);

export default clientsRouter;
