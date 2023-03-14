"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const biditem_entity_1 = require("./biditem.entity");
const item_entity_1 = require("./item.entity");
let ItemsService = class ItemsService {
    constructor(itemsRepository, bidItemsRepository) {
        this.itemsRepository = itemsRepository;
        this.bidItemsRepository = bidItemsRepository;
    }
    async findAll(status) {
        if (status === '') {
            return this.itemsRepository.find();
        }
        else {
            if (status === 'ongoing') {
                var is_bidding = 1;
                const datas = this.itemsRepository
                    .createQueryBuilder("item")
                    .where("item.is_bidding = :is_bidding", { is_bidding: is_bidding })
                    .getMany();
                return datas;
            }
            else {
                var is_bidding = 0;
                const datas = this.itemsRepository
                    .createQueryBuilder("item")
                    .where("item.is_bidding = :is_bidding", { is_bidding: is_bidding })
                    .getMany();
                return datas;
            }
        }
    }
    async findOne(id) {
        return this.itemsRepository.findOneBy({ id });
    }
    async create(item) {
        let insert = this.itemsRepository.insert(item);
        return insert;
    }
    async bidItem(bidItem) {
        let bid = (bidItem);
        let insert = this.bidItemsRepository.insert(bidItem);
        console.log(bid.item_id, "id");
        console.log(bid.bid_price, "price");
        this.itemsRepository.update(bid.item_id, { current_price: bid.bid_price, user_id: bid.user_id });
        return insert;
    }
};
ItemsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(item_entity_1.Item)),
    __param(1, (0, typeorm_1.InjectRepository)(biditem_entity_1.BidItem)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ItemsService);
exports.ItemsService = ItemsService;
//# sourceMappingURL=items.service.js.map