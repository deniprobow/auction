import { Repository } from 'typeorm';
import { User } from './users.entity';
export declare class UsersService {
    usersRepository: Repository<User>;
    constructor(usersRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(username: string): Promise<User>;
    register(user: any): Promise<import("typeorm").InsertResult>;
    addBalance(payload: any): Promise<any>;
}
