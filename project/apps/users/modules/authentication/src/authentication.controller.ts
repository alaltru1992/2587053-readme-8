import { Body, Controller, Post } from '@nestjs/common';
import {AuthenticationService} from "./authentication.service";
import {CreateUser} from "./dto/create-user";

@Controller('authentication')
export class AuthenticationController {
  constructor(
    private readonly authService: AuthenticationService
  ) {}

  @Post('register')
  public async create(@Body() dto: CreateUser) {
    const newUser = await this.authService.register(dto);
    return newUser.toPOJO();
  }
}
