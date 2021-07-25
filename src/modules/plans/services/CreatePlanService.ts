import { injectable, inject } from 'tsyringe';

import IPlansRepository from '../repositories/IPlansRepository';

import Plan from '@modules/plans/infra/typeorm/entities/Plan';
import AppError from '@shared/errors/AppError';

interface IRequest {
  name: string;
  available: boolean;
}

@injectable()
class CreatePlanService {
  constructor(
    @inject('PlansRepository')
    private plansRepository: IPlansRepository,
  ) {}

  public async execute({ name, available }: IRequest): Promise<Plan> {
    const findPlanByName = await this.plansRepository.findByName(name);

    if (findPlanByName) {
      throw new AppError('Plan already registered.');
    }

    const plan = this.plansRepository.create({
      name,
      available,
    });

    return plan;
  }
}

export default CreatePlanService;
