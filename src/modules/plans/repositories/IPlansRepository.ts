import Plan from '@modules/plans/infra/typeorm/entities/Plan';
import ICreatePlanDTO from '../dtos/ICreatePlanDTO';

export default interface IPlansRepository {
  create(data: ICreatePlanDTO): Promise<Plan>;
  findAll(): Promise<Plan[]>;
  findByName(name: string): Promise<Plan | undefined>;
}
