import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(@Query() query: any) {
    const userService = new UsersService();

    if (query.gender) {
      return userService.getAllUsers().filter((u) => u.gender === query.gender);
    }

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
