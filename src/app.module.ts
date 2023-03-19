import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { CostumersModule } from './costumers/costumers.module';
import { ProductsModule } from './products/products.module';
import { RequestsModule } from './requests/requests.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'babar.db.elephantsql.com',
      port: 5432,
      username: 'mbinbnbj',
      password: 'SrwTTHJQVZT0cbUYoU0YjwJ5A59-HhnD',
      database: 'mbinbnbj',
      entities: [],
      synchronize: true,
      logging: ['query', 'error'],
    }),
    CostumersModule,
    ProductsModule,
    RequestsModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
