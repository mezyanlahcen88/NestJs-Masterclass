import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from './dto/create-post.dto';

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

    @Post()
    public store(@Body() createPostDto :CreatePostDto){
        console.log(createPostDto);

    }
}
