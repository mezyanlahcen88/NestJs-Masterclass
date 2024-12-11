import { Module } from '@nestjs/common';
import { MetaOptionService } from './meta-option.service';
import { MetaOptionController } from './meta-option.controller';
import { MetaOption } from './entities/meta-option.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [MetaOptionController],
  providers: [MetaOptionService],
  imports:[
    TypeOrmModule.forFeature([MetaOption])
  ]
})
export class MetaOptionModule {}
