import { injectable, inject } from 'tsyringe';

import IClientsRepository from '@modules/clients/repositories/IClientsRepository';

import Client from '@modules/clients/infra/typeorm/entities/Client';

@injectable()
class ListClientService {
  constructor(
    @inject('ClientsRepository')
    private clientRepository: IClientsRepository,
  ) {}

  public async execute(): Promise<Client[]> {
    const clients = await this.clientRepository.findAll();

    return clients;
  }
}

export default ListClientService;
