import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column('decimal', { precision: 10, scale: 2, default:0.00 })
  balance: number;
}