import {Injectable} from "@nestjs/common";
import {EntityFactory, UserAuthInterface} from '@project/core'
import {UserEntity} from "./user.entity";

Injectable()
export class UserFactory implements EntityFactory<UserEntity>{
  create(entityPlainData: UserAuthInterface): UserEntity {
    return new UserEntity(entityPlainData)
  }
}
