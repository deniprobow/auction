import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BidItem } from './biditem.entity';
import { Item } from './item.entity';

@Injectable()
export class ItemsService {
    constructor(
        @InjectRepository(Item)
        public itemsRepository : Repository<Item>,
        @InjectRepository(BidItem)
        public bidItemsRepository : Repository<BidItem>
    ){}
    
    async findAll(status:any):Promise<Item[]>{
        if(status===''){
            return this.itemsRepository.find();
        }
        else{
            if(status==='ongoing'){
                // return this.itemsRepository.find();
                var is_bidding : number = 1;
                const datas:any = this.itemsRepository
                .createQueryBuilder("item")
                .where("item.is_bidding = :is_bidding", { is_bidding: is_bidding })
                .getMany();
                return datas;
            }
            else{
                // return this.itemsRepository.find();
                var is_bidding : number = 0;
                const datas:any = this.itemsRepository
                .createQueryBuilder("item")
                .where("item.is_bidding = :is_bidding", { is_bidding: is_bidding })
                .getMany();
                return datas;
            }
        }
        
    }

    async findOne(id : number): Promise<Item>{
        return this.itemsRepository.findOneBy({id});
    }

    async create(item: any) {

        let insert =  this.itemsRepository.insert(item);
        return insert;
    }

    async bidItem(bidItem: any) {
       let bid : any = (bidItem);
       let insert =  this.bidItemsRepository.insert(bidItem);
       console.log(bid.item_id,"id");
       console.log(bid.bid_price,"price");
       this.itemsRepository.update(bid.item_id, {current_price:bid.bid_price,user_id:bid.user_id});
       return insert;
    }
}
