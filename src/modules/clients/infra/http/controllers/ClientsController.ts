import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateClientService from '@modules/clients/services/CreateClientService';
import UpdateClientService from '@modules/clients/services/UpdateClientService';
import DeleteClientService from '@modules/clients/services/DeleteClientService';
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

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, cpf, cep, adress, city, uf } = request.body;

    const updateClientService = container.resolve(UpdateClientService);

    const clientUpdate = await updateClientService.execute({
      id: request.query.id as string,
      name,
      cpf,
      cep,
      adress,
      city,
      uf,
    });

    return response.json(clientUpdate);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const id = request.query.id as string;

    const deleteClientService = container.resolve(DeleteClientService);

    const result = await deleteClientService.execute(id);

    return response.json(result);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listClientService = container.resolve(ListClientService);

    const clients = await listClientService.execute();

    return response.json(classToClass(clients));
  }
}
