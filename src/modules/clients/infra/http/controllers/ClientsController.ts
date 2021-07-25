import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateClientService from '@modules/clients/services/CreateClientService';
import ListClientService from '@modules/clients/services/ListClientService';

export default class ClientsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, cpf, cep, adress, city, uf } = request.body;

    const createClientService = container.resolve(CreateClientService);

    const client = await createClientService.execute({
      name,
      cpf,
      cep,
      adress,
      city,
      uf,
    });

    return response.json(client);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listClientService = container.resolve(ListClientService);

    const clients = await listClientService.execute();

    return response.json(clients);
  }
}
