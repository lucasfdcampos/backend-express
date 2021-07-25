import { injectable, inject } from 'tsyringe';

import ILeadsRepository from '@modules/leads/repositories/ILeadsRepository';

import Lead from '@modules/leads/infra/typeorm/entities/Lead';

interface RequestDTO {
  plan_id: string;
  user_id: string;
  client_id: string;
}

@injectable()
class CreateLeadService {
  constructor(
    @inject('LeadsRepository')
    private leadsRepository: ILeadsRepository,
  ) {}

  public async execute({
    plan_id,
    user_id,
    client_id,
  }: RequestDTO): Promise<Lead> {
    const lead = this.leadsRepository.create({ plan_id, user_id, client_id });

    return lead;
  }
}

export default CreateLeadService;
