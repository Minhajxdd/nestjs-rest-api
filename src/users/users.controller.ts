import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    const userService = new UsersService();
    return userService.getAllUsers();
  }

  @Post()
  createUser() {
    return 'A new user has been created!';
  }
}
