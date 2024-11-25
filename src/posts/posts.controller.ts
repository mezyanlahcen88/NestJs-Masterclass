import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './posts.service';
import { UsersService } from 'src/users/providers/users.service';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService :PostsService
        ,private readonly userService: UsersService
    ){

    }

    @Get('/userId')
    public getUsers(@Param('userId') userId :string){
        return this.postsService.findAll(userId)

    }
}
