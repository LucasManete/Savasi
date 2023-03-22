import { Module } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { RequestsController } from './requests.controller';
import { CostumersService } from 'src/costumers/costumers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Request } from './entities/request.entity';
import { Customer } from 'src/costumers/entities/costumer.entity';
import { Product } from 'src/products/entities/product.entity';
import { ProductsService } from 'src/products/products.service';

@Module({
  imports: [TypeOrmModule.forFeature([Request, Customer, Product])],
  controllers: [RequestsController],
  providers: [RequestsService, CostumersService, ProductsService]
})
export class RequestsModule {}
