import { getRepository, Repository } from 'typeorm';

import ILeadsRepository from '@modules/leads/repositories/ILeadsRepository';
import ICreateLeadDTO from '@modules/leads/dtos/ICreateLeadDTO';

import Lead from '@modules/leads/infra/typeorm/entities/Lead';

class LeadsRepository implements ILeadsRepository {
  private ormRepository: Repository<Lead>;

  constructor() {
    this.ormRepository = getRepository(Lead);
  }

  public async findById(id: string): Promise<Lead | undefined> {
    const lead = await this.ormRepository.findOne(id);

    return lead;
  }

  public async findAll(): Promise<Lead[]> {
    const findAll = await this.ormRepository.find({
      relations: ['plan', 'client', 'user'],
    });

    return findAll;
  }

  public async findAllByClient(client_id: string): Promise<Lead[]> {
    const leads = await this.ormRepository.find({ where: { client_id } });

    return leads;
  }

  public async create(data: ICreateLeadDTO): Promise<Lead> {
    const lead = this.ormRepository.create(data);

    await this.ormRepository.save(lead);

    return lead;
  }

  public async save(lead: Lead): Promise<Lead> {
    return this.ormRepository.save(lead);
  }

  public async delete(id: string): Promise<number | null | undefined> {
    const { affected } = await this.ormRepository.delete(id);

    return affected;
  }
}

export default LeadsRepository;
