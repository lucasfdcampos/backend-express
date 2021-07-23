import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import ClientsRepository from '../repositories/ClientsRepository';
import CreateClientService from '../services/CreateClientService';

const clientsRouter = Router();

clientsRouter.get('/', async (request, response) => {
  const clientsRepository = getCustomRepository(ClientsRepository);

  const clients = await clientsRepository.find();

  return response.json(clients);
});

clientsRouter.post('/', async (request, response) => {
  try {
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
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default clientsRouter;
