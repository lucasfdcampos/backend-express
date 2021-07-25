import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import User from '@modules/users/infra/typeorm/entities/User';

@injectable()
class DeleteUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(id: string): Promise<number> {
    if (!id) {
      throw new AppError('Invalid user.');
    }

    const findUser = await this.usersRepository.findById(id);

    if (!findUser) {
      throw new AppError('User not found.');
    }

    const results = await this.usersRepository.delete(id);

    return results as number;
  }
}

export default DeleteUserService;
