/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { Costumer } from 'src/costumers/entities/costumer.entity';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
    secret: 'jwtConstants.secret',
    signOptions: { expiresIn: '60s' },
  }),TypeOrmModule.forFeature([Costumer])],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
