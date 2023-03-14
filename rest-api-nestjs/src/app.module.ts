import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users.entity';
import { ItemsModule } from './items/items.module';
import { Item } from './items/item.entity';
import { BidItem } from './items/biditem.entity';


@Module({
  imports: [ AuthModule, UsersModule, ItemsModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 8889,
    username: 'root',
    password: 'root',
    database: 'bids',
    entities: [User, Item, BidItem],
    synchronize: true,
  }), ItemsModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
