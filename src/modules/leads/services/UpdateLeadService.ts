import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ILeadsRepository from '@modules/leads/repositories/ILeadsRepository';

import Lead from '@modules/leads/infra/typeorm/entities/Lead';

interface IRequest {
  id?: string;
  plan_id: string;
  client_id: string;
}

@injectable()
class UpdateLeadService {
  constructor(
    @inject('LeadsRepository')
    private leadsRepository: ILeadsRepository,
  ) {}

  public async execute({ id, plan_id, client_id }: IRequest): Promise<Lead> {
    if (!id) {
      throw new AppError('Invalid client.');
    }

    const lead = await this.leadsRepository.findById(id);

    if (!lead) {
      throw new AppError('Lead not found.');
    }

    lead.plan_id = plan_id;
    lead.client_id = client_id;

    const leadUpdate = await this.leadsRepository.save(lead);

    return leadUpdate;
  }
}

export default UpdateLeadService;
