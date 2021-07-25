import { injectable, inject } from 'tsyringe';

import IClientsRepository from '@modules/clients/repositories/IClientsRepository';

import Client from '@modules/clients/infra/typeorm/entities/Client';
import AppError from '@shared/errors/AppError';

interface IRequest {
  name: string;
  cpf: string;
  cep: string;
  adress: string;
  city: string;
  uf: string;
}

@injectable()
class CreateClientService {
  constructor(
    @inject('ClientsRepository')
    private clientRepository: IClientsRepository,
  ) {}

  public async execute({
    name,
    cpf,
    cep,
    adress,
    city,
    uf,
  }: IRequest): Promise<Client> {
    const findClientByCpf = await this.clientRepository.findByCPF(cpf);

    if (findClientByCpf) {
      throw new AppError('Client already registered.');
    }

    const client = this.clientRepository.create({
      name,
      cpf,
      cep,
      adress,
      city,
      uf,
    });

    return client;
  }
}

export default CreateClientService;
