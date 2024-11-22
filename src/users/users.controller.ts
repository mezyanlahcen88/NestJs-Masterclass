import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamsDto } from './dtos/get-users-params.dto';
import { PatchUsersDto } from './dtos/patch-users.dto';

@Controller('users')
export class UsersController {
  @Get('/:id?')
  public getAllUSers(
    @Param() getUsersParamsDto: GetUsersParamsDto,    
  ) {
     console.log(typeof getUsersParamsDto);
     console.log(getUsersParamsDto instanceof GetUsersParamsDto);
    return 'Get all users';
  }

  @Post()
  public CreateUser(@Body() createUserDto: CreateUserDto) {
    console.log(typeof createUserDto);
    console.log(createUserDto instanceof CreateUserDto);
    return 'Create a user';
  }

  @Patch()
  public updateUser(@Body() patchUsersDto: PatchUsersDto) {
    console.log(typeof patchUsersDto);
    console.log(patchUsersDto instanceof PatchUsersDto);
    return 'Update a user';
  }
}
