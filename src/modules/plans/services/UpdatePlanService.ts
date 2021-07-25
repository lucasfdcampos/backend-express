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

  public async execute({ id, name, available }: IRequest): Promise<Plan> {
    if (!id) {
      throw new AppError('Invalid client.');
    }

    const plan = await this.plansRepository.findById(id);

    if (!plan) {
      throw new AppError('Plan not found.');
    }

    plan.name = name;
    plan.available = available;

    const planUpdate = await this.plansRepository.save(plan);

    return planUpdate;
  }
}

export default CreatePlanService;
