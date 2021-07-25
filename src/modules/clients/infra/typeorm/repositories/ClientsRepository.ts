import { DeleteResult, getRepository, Repository } from 'typeorm';

import IClientsRepository from '@modules/clients/repositories/IClientsRepository';
import ICreateClientDTO from '@modules/clients/dtos/ICreateClientDTO';

import Client from '@modules/clients/infra/typeorm/entities/Client';

class ClientsRepository implements IClientsRepository {
  private ormRepository: Repository<Client>;

  constructor() {
    this.ormRepository = getRepository(Client);
  }

  public async findById(id: string): Promise<Client | undefined> {
    const client = await this.ormRepository.findOne(id);

    return client;
  }

  public async findByCPF(cpf: string): Promise<Client | undefined> {
    const findClient = await this.ormRepository.findOne({ where: { cpf } });

    return findClient;
  }

  public async findAll(): Promise<Client[]> {
    const findAll = await this.ormRepository.find();

    return findAll;
  }

  public async create(data: ICreateClientDTO): Promise<Client> {
    const client = this.ormRepository.create(data);

    await this.ormRepository.save(client);

    return client;
  }

  public async save(client: Client): Promise<Client> {
    return this.ormRepository.save(client);
  }

  public async delete(id: string): Promise<DeleteResult> {
    const result = await this.ormRepository.delete(id);

    return result;
  }
}

export default ClientsRepository;
