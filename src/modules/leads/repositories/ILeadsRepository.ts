import Lead from '@modules/leads/infra/typeorm/entities/Lead';
import ICreateLeadDTO from '../dtos/ICreateLeadDTO';

export default interface ILeadsRepository {
  create(data: ICreateLeadDTO): Promise<Lead>;
  findAll(): Promise<Lead[]>;
  findAllByClient(client_id: string): Promise<Lead[]>;
}
