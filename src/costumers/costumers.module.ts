/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CostumersService } from './costumers.service';
import { CostumersController } from './costumers.controller';
import { Costumer } from './entities/costumer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Costumer])],
  controllers: [CostumersController],
  providers: [CostumersService],
})
export class CostumersModule {}
