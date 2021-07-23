import Client from '../models/Client';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Client)
class ClientsRepository extends Repository<Client> {}

export default ClientsRepository;
