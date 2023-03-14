import { Response } from 'express';
import { AppService } from './app.service';
import { BidItemCreateDto } from './items/biditem-create.dto';
import { ItemCreateDto } from './items/item-create.dto';
import { ItemsService } from './items/items.service';
import { DepositoDto } from './users/deposito.dto';
import { UserDto } from './users/register.Dto';
import { UsersService } from './users/users.service';
export declare class AppController {
    private readonly appService;
    private readonly usersService;
    private readonly itemsService;
    constructor(appService: AppService, usersService: UsersService, itemsService: ItemsService);
    login(req: any): Promise<any>;
    bidItems(bidItem: BidItemCreateDto, resp: Response): Promise<Response<any, Record<string, any>>>;
    deposito(payload: DepositoDto, resp: Response): Promise<Response<any, Record<string, any>>>;
    createItem(item: ItemCreateDto, resp: Response): Promise<Response<any, Record<string, any>>>;
    addUser(user: UserDto, resp: Response): Promise<Response<any, Record<string, any>>>;
    users(): Promise<any>;
    items(status: any): Promise<any>;
    getHello(): string;
}
