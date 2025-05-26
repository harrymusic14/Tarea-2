import { BaseEntity, Entity, PrimaryGeneratedColumn } from "typeorm"

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
}

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id:string;
}