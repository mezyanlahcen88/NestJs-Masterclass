import { Body, 
    Controller,
     Get,Param,Post, Query,Headers, ParseIntPipe, 
     DefaultValuePipe,
     Ip,
     ValidationPipe} from "@nestjs/common";
import { query } from "express";
import { CreateUserDto } from "./dtos/create-user.dto";

@Controller('users')
export class UsersController {
    

    @Get('/:id')
    public getAllUSers(@Param('id',ParseIntPipe) id :number,
    @Query('limit' ,new DefaultValuePipe(10),ParseIntPipe) limit :number,
    @Query('page' ,new DefaultValuePipe(1),ParseIntPipe) page :number) 
    {
        console.log(limit);
        console.log(page);
        return 'Get all users';
    }

    @Post()
    public CreateUser( @Body() createUserDto :CreateUserDto)  {
        console.log(createUserDto)
        return 'Create a user';
    }
}