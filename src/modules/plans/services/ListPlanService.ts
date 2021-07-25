import { injectable, inject } from 'tsyringe';

import IPlansRepository from '@modules/plans/repositories/IPlansRepository';

import Plan from '@modules/plans/infra/typeorm/entities/Plan';

@injectable()
class ListPlanService {
  constructor(
    @inject('PlansRepository')
    private planRepository: IPlansRepository,
  ) {}

  public async execute(): Promise<Plan[]> {
    const plans = await this.planRepository.findAll();

    return plans;
  }
}

export default ListPlanService;
