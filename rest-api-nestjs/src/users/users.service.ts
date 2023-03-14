import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import * as bcrypt from 'bcrypt';



@Injectable()
export class UsersService {
    
    constructor(
      @InjectRepository(User)
      public usersRepository : Repository<User>
    ){}

    async findAll():Promise<User[]>{
      return this.usersRepository.find();
    }

    async findOne(username : string): Promise<User>{
        return this.usersRepository.findOneBy({username});
    }

    async register(user: any) {
      let password = bcrypt.hash(user.password, 12);
      const hash = await bcrypt.hash(user.password, 12);
      let userEncrypt:any = {"username":user.username, "name":user.username, "password":hash, "balance":0.00};
      console.log("userEncrypt::"+JSON.stringify(userEncrypt));
      let insert =  this.usersRepository.insert(userEncrypt);
      return insert;
  }

    async addBalance(payload: any) {
      let insert:any = this.usersRepository
                      .createQueryBuilder()
                      .update("user")
                      .set({ balance:()=>"balance + "+ payload.amount})
                      .where("id = :id", { id: payload.user_id })
                      .execute()
      return insert;
   }
}
