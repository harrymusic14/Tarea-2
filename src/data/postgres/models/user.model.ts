import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum UserRole { 
  USER = 'user',
  ADMIN = 'admin',
}

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id:string;

  @Column('varchar', {
    length: 150,
  })
  name:string;

  @Column('varchar', {
    length: 255,
    unique: true,
    nullable: false,
  })
  email: string;
   
  @Column('varchar',{
    length: 255,
    nullable: true,
  })
  password: string;

  @Column('enum',{
    enum: UserRole,
    default: UserRole.USER,
  })
  rol: UserRole;

  @Column('boolean',{
    nullable: false,
    default: true,
  })
  status: boolean;

  @Column('timestamp',{
    default: () => 'CURRENT_TIMESTAMP',
    nullable: false,
  })
  createt_at: Date;
}