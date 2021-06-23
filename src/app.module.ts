import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {mongodbConfig} from "../config/mongodb.config";
import {Connection} from "typeorm";

@Module({
  imports: [
      TypeOrmModule.forRoot(mongodbConfig),
      ArticleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
    constructor(private connection: Connection) {}
}
