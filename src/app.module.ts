import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

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
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
