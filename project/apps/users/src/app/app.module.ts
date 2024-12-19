import { Module } from '@nestjs/common';

import {UserModule} from "../../modules/user/user.module";
import {AuthenticationModule} from "../../modules/authentication/authentication.module";


@Module({
  imports: [UserModule, AuthenticationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
