import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserService from '@modules/users/services/UpdateUserService';
import DeleteUserService from '@modules/users/services/DeleteUserService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({ name, email, password });

    return response.json(classToClass(user));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const updateUserService = container.resolve(UpdateUserService);

    const userUpdate = await updateUserService.execute({
      id: request.query.id as string,
      name,
      email,
      password,
    });

    return response.json(classToClass(userUpdate));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const id = request.query.id as string;

    const deleteUserService = container.resolve(DeleteUserService);

    const result = await deleteUserService.execute(id);

    return response.json(result);
  }
}
