import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreateCatDto } from '../../cats/dto/create-cat.dto';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostsService {
  constructor(
    /*
     * Injecting Users Service
     */
    private readonly usersService: UsersService,
    /**
     * inject postRepository
     */
    @InjectRepository(Post)
    private postRepository :Repository<Post>
  ) {}

  public findAll(userId: string) {
    const user = this.usersService.findOneById(userId);

    return [
      {
        user: user,
        title: 'Test Tile',
        content: 'Test Content',
      },
      {
        user: user,
        title: 'Test Tile 2',
        content: 'Test Content 2',
      },
    ];
  }

  public async createPost(createCatDto :CreateCatDto){
    let newPost = this.postRepository.create(createCatDto);
    newPost = await this.postRepository.save(newPost);
    return newPost;
  }
}
