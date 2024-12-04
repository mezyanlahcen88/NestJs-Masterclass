import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class Tag {
  // id
  // name
  //slug
  // description
  // schema
  // featuredImageUrl
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({type: 'varchar',length: 190, nullable: false, unique: true})
  name: string;

 @Column({type: 'varchar',length: 512, nullable: false, unique: true})
  slug: string;

  @Column({type: 'text',nullable: true})
  description?: string;

  @Column({type: 'text',nullable: true})
  schema?: string;

  @Column({type: 'varchar',length: 1024,nullable: true})
  featuredImageUrl?: string;

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @DeleteDateColumn()
  deletedAt: Date;
}
