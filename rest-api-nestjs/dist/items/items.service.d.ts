import { Repository } from 'typeorm';
import { BidItem } from './biditem.entity';
import { Item } from './item.entity';
export declare class ItemsService {
    itemsRepository: Repository<Item>;
    bidItemsRepository: Repository<BidItem>;
    constructor(itemsRepository: Repository<Item>, bidItemsRepository: Repository<BidItem>);
    findAll(status: any): Promise<Item[]>;
    findOne(id: number): Promise<Item>;
    create(item: any): Promise<import("typeorm").InsertResult>;
    bidItem(bidItem: any): Promise<import("typeorm").InsertResult>;
}
