import { getRepository } from 'typeorm';

import Plan from '../models/Plan';

interface RequestDTO {
  name: string;
  available: boolean;
}

class CreatePlanService {
  public async execute({ name, available }: RequestDTO): Promise<Plan> {
    const planRepository = getRepository(Plan);

    const plan = planRepository.create({
      name,
      available,
    });

    await planRepository.save(plan);

    return plan;
  }
}

export default CreatePlanService;
