import { Entity, Column, PrimaryGeneratedColumn, Timestamp, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class BidItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  item_id: number;

  @Column('decimal', { precision: 10, scale: 2 })
  bid_price: number;

  @CreateDateColumn({type:"timestamp", default:()=>"CURRENT_TIMESTAMP(6)"})
  created_at: Date

  @UpdateDateColumn({type:"timestamp", default:()=>"CURRENT_TIMESTAMP(6)"})
  updated_at: Date


}