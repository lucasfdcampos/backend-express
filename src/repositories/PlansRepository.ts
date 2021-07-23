import Plan from '../models/Plan';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Plan)
class PlansRepository extends Repository<Plan> {}

export default PlansRepository;
