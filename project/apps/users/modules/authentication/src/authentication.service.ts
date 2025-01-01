import { Injectable, ConflictException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import {UserRepository, UserEntity} from "@project/user";
import {CreateUser} from "../src";
import dayjs from 'dayjs';
import {UserRole} from "@project/core";
import {LoginUser} from "../src";

@Injectable()
export class AuthenticationService {
  constructor(private readonly userRepository: UserRepository) {
  }

  public async register(dto: CreateUser){

    const {firstName, dateBirth, lastName, email, password } = dto;

    const currentUser = {
      firstName, dateOfBirth: dayjs(dateBirth).toDate(), lastName, email, role: UserRole.User, hashPassWord: '', avatar: ''
    }

    const doesUserExist = await this.userRepository.findUserByEmail(email)
     if(!doesUserExist){
       throw new ConflictException('Пользователь существует');
     }

     const userEntity = await new UserEntity(currentUser).setPASSword(password);

     this.userRepository.save(userEntity);

     return userEntity;
  }

  public async verifyUser(user: LoginUser){
    const userExists = await this.userRepository.findUserByEmail(user.email);
    if(!userExists){
      throw new NotFoundException('пользователя не существует')
    }

    if(!await userExists.comparePASSWord(user.password)){
      throw new UnauthorizedException('пользователь не авторизован')
    }

    return userExists
  }

  public async getUser(id: string){
    const userExists = await this.userRepository.findById(id);
    if(!userExists){
      throw new NotFoundException('пользователя не существует')
    }

    return userExists;
  }
}
