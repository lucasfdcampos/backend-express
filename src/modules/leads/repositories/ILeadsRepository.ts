import Lead from '@modules/leads/infra/typeorm/entities/Lead';
import ICreateLeadDTO from '../dtos/ICreateLeadDTO';

export default interface ILeadsRepository {
  findById(id: string): Promise<Lead | undefined>;
  findAll(): Promise<Lead[]>;
  findAllByClient(client_id: string): Promise<Lead[]>;
  create(data: ICreateLeadDTO): Promise<Lead>;
  save(lead: Lead): Promise<Lead>;
  delete(id: string): Promise<number | null | undefined>;
}
