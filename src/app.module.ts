import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ProductModule, MongooseModule.forRoot('mongodb://localhost/nestapigmayas01', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
