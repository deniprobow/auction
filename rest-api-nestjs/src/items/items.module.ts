import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BidItem } from './biditem.entity';
import { Item } from './item.entity';
import { ItemsService } from './items.service';

@Module({
  imports:[TypeOrmModule.forFeature([Item,BidItem])],
  providers: [ItemsService],
  exports:[ItemsService]
})
export class ItemsModule {}
