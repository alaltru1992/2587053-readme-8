import { Module } from '@nestjs/common';

import {UserModule} from "../../modules/user/user.module";
import {AuthenticationModule} from "../../modules/authentication/src/authentication.module";


@Module({
  imports: [UserModule, AuthenticationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
