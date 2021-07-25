import { injectable, inject } from 'tsyringe';

import IClientsRepository from '@modules/clients/repositories/IClientsRepository';

import Client from '@modules/clients/infra/typeorm/entities/Client';
import AppError from '@shared/errors/AppError';

interface IRequest {
  id?: string;
  name: string;
  cpf: string;
  cep: string;
  adress: string;
  city: string;
  uf: string;
}

@injectable()
class UpdateClientService {
  constructor(
    @inject('ClientsRepository')
    private clientRepository: IClientsRepository,
  ) {}

  public async execute({
    id,
    name,
    cpf,
    cep,
    adress,
    city,
    uf,
  }: IRequest): Promise<Client> {
    if (!id) {
      throw new AppError('Invalid client.');
    }

    const client = await this.clientRepository.findById(id);

    if (!client) {
      throw new AppError('Client not found.');
    }

    client.name = name;
    client.cpf = cpf;
    client.cep = cep;
    client.adress = adress;
    client.city = city;
    client.uf = uf;

    const clientUpdate = await this.clientRepository.save(client);

    return clientUpdate;
  }
}

export default UpdateClientService;
