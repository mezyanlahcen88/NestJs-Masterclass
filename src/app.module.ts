import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CatsModule } from './cats/cats.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Post } from './posts/post.entity';
import { TagModule } from './tag/tag.module';
import { MetaOptionModule } from './meta-option/meta-option.module';



@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'admin',
        database: 'nestjs-blog',
        // entities: [User,Post],
        autoLoadEntities: true,
        synchronize: true, // Disable in production
      }),
      imports: [], // Future imports like ConfigModule will go here
      inject: [],  // Future injections like ConfigService will go here
    }),
    UsersModule, CatsModule, PostsModule, AuthModule,TagModule, MetaOptionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
