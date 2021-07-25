import { injectable, inject } from 'tsyringe';

import IPlansRepository from '../repositories/IPlansRepository';

import Plan from '@modules/plans/infra/typeorm/entities/Plan';
import AppError from '@shared/errors/AppError';

interface IRequest {
  id?: string;
  name: string;
  available: boolean;
}

@injectable()
class CreatePlanService {
  constructor(
    @inject('PlansRepository')
    private plansRepository: IPlansRepository,
  ) {}

  public async execute(id: string): Promise<number> {
    if (!id) {
      throw new AppError('Invalid plan.');
    }

    const results = await this.plansRepository.delete(id);

    return results as number;
  }
}

export default CreatePlanService;
