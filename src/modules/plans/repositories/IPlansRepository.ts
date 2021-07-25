import Plan from '@modules/plans/infra/typeorm/entities/Plan';
import ICreatePlanDTO from '../dtos/ICreatePlanDTO';

export default interface IPlansRepository {
  findByName(name: string): Promise<Plan | undefined>;
  findAll(): Promise<Plan[]>;
  create(data: ICreatePlanDTO): Promise<Plan>;
}
