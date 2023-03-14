import { Controller, Get, Post, UseGuards,Request, Body, Res, HttpStatus, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { AppService } from './app.service';
import { BidItemCreateDto } from './items/biditem-create.dto';
import { BidItem } from './items/biditem.entity';
import { ItemCreateDto } from './items/item-create.dto';
import { ItemsService } from './items/items.service';
import { DepositoDto } from './users/deposito.dto';
import { UserDto } from './users/register.Dto';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly usersService : UsersService, private readonly itemsService:ItemsService) {}

  @UseGuards(AuthGuard('local'))
  
  @Post('auth/login')
  async login(@Request() req){
    return req.user;
  }

  @Post('items/bid')
  async bidItems(@Body() bidItem : BidItemCreateDto, @Res() resp : Response){
    let insert = this.itemsService.bidItem(bidItem);
    if(insert) {
      return resp.status(HttpStatus.OK).send({"status":"success","message":"Bid item insert successfully."});
   } else {
      return resp.status(HttpStatus.BAD_REQUEST).send({"status":"error","message":"Bid item insert error."});
   }
  }

  @Post('user/deposito')
  async deposito(@Body() payload : DepositoDto, @Res() resp : Response){
    let insert = this.usersService.addBalance(payload);
    if(insert) {
      return resp.status(HttpStatus.OK).send({"status":"success","message":"Add deposito successfully."});
   } else {
      return resp.status(HttpStatus.BAD_REQUEST).send({"status":"error","message":"Add deposito failed."});
   }
  }

  @Post('items')
  async createItem(@Body() item : ItemCreateDto, @Res() resp : Response){
    let insert = this.itemsService.create(item);
    if(insert) {
      return resp.status(HttpStatus.OK).send({"status":"success","message":"Bid item insert successfully."});
   } else {
      return resp.status(HttpStatus.BAD_REQUEST).send({"status":"error","message":"Bid item insert error."});
   }
  }

  @Post('register')
  async addUser(@Body() user : UserDto, @Res() resp : Response){
    let insert = this.usersService.register(user);
    if(insert) {
      return resp.status(HttpStatus.OK).send({"status":"success","message":"User register successfully."});
   } else {
      return resp.status(HttpStatus.BAD_REQUEST).send({"status":"error","message":"User register failed."});
   }
  }

  @Get('users')
  async users(): Promise<any> {
    return this.usersService.findAll();
  }

  @Get('items/:status')
  async items(@Param('status') status): Promise<any> {
    return this.itemsService.findAll(status);
  }

  @Get() 
  getHello(): string {
    return this.appService.getHello();
  }
}
