import { Module } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { RequestsController } from './requests.controller';
import { CostumersService } from 'src/costumers/costumers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Request } from './entities/request.entity';
import { Costumer } from 'src/costumers/entities/costumer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Request, Costumer])],
  controllers: [RequestsController],
  providers: [RequestsService, CostumersService]
})
export class RequestsModule {}
