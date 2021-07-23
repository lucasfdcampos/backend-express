import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Client from '../models/Client';

interface RequestDTO {
  name: string;
  cpf: string;
  cep: string;
  adress: string;
  city: string;
  uf: string;
}

class CreateClientService {
  public async execute({
    name,
    cpf,
    cep,
    adress,
    city,
    uf,
  }: RequestDTO): Promise<Client> {
    const clientRepository = getRepository(Client);

    const client = clientRepository.create({
      name,
      cpf,
      cep,
      adress,
      city,
      uf,
    });

    await clientRepository.save(client);

    return client;
  }
}

export default CreateClientService;
