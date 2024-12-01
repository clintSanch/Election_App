import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { LoginService } from './login/login.service';
import { RegisterService } from './register/register.service';

@Module({
  controllers: [UserController],
  providers: [LoginService, RegisterService],
})
export class UserModule {}
