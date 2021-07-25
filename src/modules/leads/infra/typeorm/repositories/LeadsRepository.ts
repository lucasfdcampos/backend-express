import { getRepository, Repository } from 'typeorm';

import ILeadsRepository from '@modules/leads/repositories/ILeadsRepository';
import ICreateLeadDTO from '@modules/leads/dtos/ICreateLeadDTO';

import Lead from '@modules/leads/infra/typeorm/entities/Lead';

class LeadsRepository implements ILeadsRepository {
  private ormRepository: Repository<Lead>;

  constructor() {
    this.ormRepository = getRepository(Lead);
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
    const lead = await this.ormRepository.create(data);

    await this.ormRepository.save(lead);

    return lead;
  }
}

export default LeadsRepository;
