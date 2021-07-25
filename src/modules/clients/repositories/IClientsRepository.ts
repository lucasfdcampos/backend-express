import { DeleteResult } from 'typeorm';
import Client from '@modules/clients/infra/typeorm/entities/Client';
import ICreateClientDTO from '@modules/clients/dtos/ICreateClientDTO';

export default interface IClientsRepository {
  findById(id: string): Promise<Client | undefined>;
  findByCPF(cpf: string): Promise<Client | undefined>;
  findAll(): Promise<Client[]>;
  create(data: ICreateClientDTO): Promise<Client>;
  save(client: Client): Promise<Client>;
  delete(id: string): Promise<DeleteResult>;
}
