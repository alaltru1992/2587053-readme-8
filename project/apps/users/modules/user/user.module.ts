import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import{ UserFactory} from "./user.factory";
import {UserEntity} from "./user.entity";

@Module({
  providers:[UserFactory, UserEntity],
  controllers: [UserController],
})
export class UserModule {}
