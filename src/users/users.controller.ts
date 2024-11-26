import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamsDto } from './dtos/get-users-params.dto';
import { PatchUsersDto } from './dtos/patch-users.dto';
import { UsersService } from './providers/users.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users Api')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('/:id?')
  @ApiOperation({
    summary: 'Fetches a list of registered users on the application.',
  })
  @ApiQuery({
    name: 'limit',
    type: String,
    description: 'The upper limit of pages you want the pagination to return',
    required: false,
    example: 10,
  })
  @ApiQuery({
    name: 'page',
    type: String,
    description:
      'The position of the page number that you want the API to return',
    required: false,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Users fetched successfully based on the query',
  })
  public getUsers(
    @Param() getUserParamDto: GetUsersParamsDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    return this.usersService.findAll(getUserParamDto, limit, page);
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
