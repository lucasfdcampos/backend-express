import { DeleteResult, getRepository, Repository } from 'typeorm';

import IPlansRepository from '@modules/plans/repositories/IPlansRepository';
import ICreatePlanDTO from '@modules/plans/dtos/ICreatePlanDTO';

import Plan from '@modules/plans/infra/typeorm/entities/Plan';

class PlansRepository implements IPlansRepository {
  private ormRepository: Repository<Plan>;

  constructor() {
    this.ormRepository = getRepository(Plan);
  }

  public async findById(id: string): Promise<Plan | undefined> {
    const plan = await this.ormRepository.findOne(id);

    return plan;
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

  public async save(plan: Plan): Promise<Plan> {
    return this.ormRepository.save(plan);
  }

  public async delete(id: string): Promise<number | null | undefined> {
    const { affected } = await this.ormRepository.delete(id);

    return affected;
  }
}

export default PlansRepository;
