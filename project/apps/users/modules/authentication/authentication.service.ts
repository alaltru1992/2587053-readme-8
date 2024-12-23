import { Injectable } from '@nestjs/common';
import {UserRepository} from "../user/src";

@Injectable()
export class AuthenticationService {
  constructor(public readonly userRepository: UserRepository) {
  }
}
