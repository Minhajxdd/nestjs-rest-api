import { Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    const userService = new UsersService();
    return userService.getAllUsers();
  }

  @Get(`:id/`)
  getUserById(@Param('id') id: any) {
    const userService = new UsersService();
    return userService.getUserById(+id);
  }

  @Post()
  createUser() {
    return 'A new user has been created!';
  }
}
