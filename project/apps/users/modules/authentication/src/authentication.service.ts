import { Injectable, ConflictException } from '@nestjs/common';
import {UserRepository, UserEntity} from "@project/user";
import {CreateUser} from "../src";
import dayjs from 'dayjs';
import {UserRole} from "@project/core";

export class AuthenticationService {
  constructor(private readonly userRepository: UserRepository) {
  }

  public async register(dto: CreateUser){

    const {firstName, dateBirth, lastName, email, password } = dto;

    const currentUser = {
      firstName, dateOfBirth: dayjs(dateBirth).toDate(), lastName, email, role: UserRole.User, hashPassWord: ''
    }

    const doesUserExist = await this.userRepository.findUserByEmail(email)
     if(!doesUserExist){
       throw new ConflictException('Пользователь существует');
     }

     const userEntity = await new UserEntity(currentUser).setPASSword(password);

     return this.userRepository.save(userEntity)
  }
}
