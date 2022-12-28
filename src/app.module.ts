import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrmAsyncConfig } from './config/orm.config';
import { ApartmentModule } from './api/v1/apartment/apartment.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(OrmAsyncConfig),
    ApartmentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
