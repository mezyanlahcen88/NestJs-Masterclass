import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Headers,
  ParseIntPipe,
  DefaultValuePipe,
  Ip,
  ValidationPipe,
} from '@nestjs/common';
import { query } from 'express';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamsDto } from './dtos/get-users-params.dto';

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
}
