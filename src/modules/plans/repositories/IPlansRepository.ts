import Plan from '@modules/plans/infra/typeorm/entities/Plan';
import ICreatePlanDTO from '../dtos/ICreatePlanDTO';

export default interface IPlansRepository {
  findById(id: string): Promise<Plan | undefined>;
  findByName(name: string): Promise<Plan | undefined>;
  findAll(): Promise<Plan[]>;
  create(data: ICreatePlanDTO): Promise<Plan>;
  save(plan: Plan): Promise<Plan>;
  delete(id: string): Promise<number | null | undefined>;
}
