import { Module } from '@nestjs/common';
import { UserController } from './src';
import{ UserFactory, UserEntity} from "./src";

@Module({
  providers:[UserFactory, UserEntity],
  controllers: [UserController],
})
export class UserModule {}
