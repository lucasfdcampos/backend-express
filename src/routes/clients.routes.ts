import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import multer from 'multer';

import uploadConfig from '../config/upload';

import ClientsRepository from '../repositories/ClientsRepository';
import CreateClientService from '../services/CreateClientService';
import UpdateClientAvatarService from '../services/UpdateClientAvatarService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const clientsRouter = Router();

const upload = multer(uploadConfig);

clientsRouter.use(ensureAuthenticated);

clientsRouter.get('/', async (request, response) => {
  const clientsRepository = getCustomRepository(ClientsRepository);

  const clients = await clientsRepository.find();

  return response.json(clients);
});

clientsRouter.post('/', async (request, response) => {
  const { name, cpf, cep, adress, city, uf } = request.body;

  const createClientService = new CreateClientService();

  const client = await createClientService.execute({
    name,
    cpf,
    cep,
    adress,
    city,
    uf,
  });

  return response.json(client);
});

clientsRouter.patch(
  '/avatar',
  upload.single('avatar'),
  async (request, response) => {
    const updateClientAvatar = new UpdateClientAvatarService();

    const client = await updateClientAvatar.execute({
      user_id: request.user.id,
      client_id: request.query.id?.toString(),
      avatarFilename: request.file?.filename,
    });

    return response.json(client);
  },
);

export default clientsRouter;
