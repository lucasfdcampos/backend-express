import Lead from '../models/Lead';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Lead)
class LeadsRepository extends Repository<Lead> {}

export default LeadsRepository;
