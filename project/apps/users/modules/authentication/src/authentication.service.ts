import { Injectable } from '@nestjs/common';
import {UserRepository} from "@project/user";

@Injectable()
export class AuthenticationService {
  constructor(userRepository: UserRepository) {
  }
}
