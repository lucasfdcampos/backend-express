import { injectable, inject } from 'tsyringe';

import ILeadsRepository from '@modules/leads/repositories/ILeadsRepository';

import Lead from '@modules/leads/infra/typeorm/entities/Lead';

@injectable()
class ListLeadService {
  constructor(
    @inject('LeadsRepository')
    private leadRepository: ILeadsRepository,
  ) {}

  public async execute(): Promise<Lead[]> {
    const leads = await this.leadRepository.findAll();

    return leads;
  }
}

export default ListLeadService;
