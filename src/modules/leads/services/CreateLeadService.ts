import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ILeadsRepository from '@modules/leads/repositories/ILeadsRepository';
import IClientsRepository from '@modules/clients/repositories/IClientsRepository';
import IPlansRepository from '@modules/plans/repositories/IPlansRepository';

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

    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,

    @inject('PlansRepository')
    private plansRepository: IPlansRepository,
  ) {}

  public async execute({
    plan_id,
    user_id,
    client_id,
  }: RequestDTO): Promise<Lead> {
    const client = await this.clientsRepository.findById(client_id);

    if (!client) {
      throw new AppError('Invalid client.');
    }

    const plan = await this.plansRepository.findById(plan_id);

    if (!plan) {
      throw new AppError('Invalid plan.');
    }

    if (!plan.available) {
      throw new AppError('Plan is not available.');
    }

    const lead = this.leadsRepository.create({ plan_id, user_id, client_id });

    return lead;
  }
}

export default CreateLeadService;
