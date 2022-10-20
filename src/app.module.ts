import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Lista } from './lista/entities/lista.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host:'localhost',
      port: 3306,
      username: 'root',
      password:'root',
      database: 'db_todolist',
      entities: [Lista],
      synchronize: true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
