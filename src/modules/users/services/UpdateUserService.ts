import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import User from '@modules/users/infra/typeorm/entities/User';

interface IRequest {
  id?: string;
  name: string;
  email: string;
  password: string;
}

@injectable()
class UpdateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ id, name, email, password }: IRequest): Promise<User> {
    if (!id) {
      throw new AppError('Invalid user.');
    }

    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError('User not found.');
    }

    user.name = name;
    user.email = email;
    user.password = password;

    const userUpdate = await this.usersRepository.save(user);

    return userUpdate;
  }
}

export default UpdateUserService;
