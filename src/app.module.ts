import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as config from 'src/config/keys';
import { ItemsModule } from 'src/items/items.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ItemsModule, MongooseModule.forRoot(config.default.mongoURI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
