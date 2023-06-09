import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { CostumersModule } from './costumers/costumers.module';
import { Customer } from './costumers/entities/costumer.entity';
import { Product } from './products/entities/product.entity';
import { ProductsModule } from './products/products.module';
import { Request } from './requests/entities/request.entity';
import { RequestsModule } from './requests/requests.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'babar.db.elephantsql.com',
      port: 5432,
      username: 'vpkcahmx',
      password: 'Dq1E7a2R0sLEptqYk3MEJsdZLhZjim4K',
      database: 'vpkcahmx',
      entities: [Product, Customer, Request],
      synchronize: true,
      logging: ['log','error'],
    }),
    ProductsModule,
    CostumersModule,
    RequestsModule,
    AuthModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
