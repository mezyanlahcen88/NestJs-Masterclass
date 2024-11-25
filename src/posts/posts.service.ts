import { Injectable} from '@nestjs/common';

@Injectable()
export class PostsService {


    public findAll(userId :string){
        console.log(`Fetching posts for user ID: ${userId}`);
        return { message: `Posts for user ${userId}` };
    }
}
