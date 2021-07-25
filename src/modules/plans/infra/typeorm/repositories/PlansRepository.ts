import { getRepository, Repository } from 'typeorm';

import IPlansRepository from '@modules/plans/repositories/IPlansRepository';
import ICreatePlanDTO from '@modules/plans/dtos/ICreatePlanDTO';

import Plan from '@modules/plans/infra/typeorm/entities/Plan';

class PlansRepository implements IPlansRepository {
  private ormRepository: Repository<Plan>;

  constructor() {
    this.ormRepository = getRepository(Plan);
  }

  public async findByName(name: string): Promise<Plan | undefined> {
    const findPlan = await this.ormRepository.findOne({ where: { name } });

    return findPlan;
  }

  public async findAll(): Promise<Plan[]> {
    const findAll = await this.ormRepository.find();

    return findAll;
  }

  public async create(data: ICreatePlanDTO): Promise<Plan> {
    const plan = this.ormRepository.create(data);

    await this.ormRepository.save(plan);

    return plan;
  }
}

export default PlansRepository;
