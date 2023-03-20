/* eslint-disable prettier/prettier */
import {
    Controller,
    Post,
    Body,
  } from '@nestjs/common';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}


@Post()
  login(@Body() createUserDto) {
      return this.authService.login(createUserDto);
    }
  
}
