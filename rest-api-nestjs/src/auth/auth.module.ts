import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import {PassportModule} from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';

@Module({
  imports:[UsersModule, PassportModule],
  providers: [AuthService, LocalStrategy]
})
export class AuthModule {}