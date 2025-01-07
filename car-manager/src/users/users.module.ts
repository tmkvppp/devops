import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { User } from './user.entity';


@Module({
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
