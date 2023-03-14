import { Entity, Column, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  item_name: string;

  @Column('decimal', { precision: 10, scale: 2, default:0.00 })
  default_price: number;

  @Column('decimal', { precision: 10, scale: 2, default:0.00 })
  current_price: number;

  @Column({default:0})
  duration: number;

  @Column({default:0, precision:2})
  user_id: number;

  @Column({default:0, precision:1})
  is_bidding: number;
}