import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class MetaOption {
    @PrimaryGeneratedColumn('uuid')
    id :string;
    @Column({
        type:'json',
        nullable:false
    })
    metaValue :string;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
    @DeleteDateColumn()
    deletedAt: Date;

}
