import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ILeadsRepository from '@modules/leads/repositories/ILeadsRepository';

import Lead from '@modules/leads/infra/typeorm/entities/Lead';

@injectable()
class DeleteLeadService {
  constructor(
    @inject('LeadsRepository')
    private leadsRepository: ILeadsRepository,
  ) {}

  public async execute(id: string): Promise<number> {
    if (!id) {
      throw new AppError('Invalid client.');
    }

    const findLead = await this.leadsRepository.findById(id);

    if (!findLead) {
      throw new AppError('Lead not found.');
    }

    const results = await this.leadsRepository.delete(id);

    return results as number;
  }
}

export default DeleteLeadService;
