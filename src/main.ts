import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv'
dotenv.config({path: __dirname + '/.env'})

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3005, function() {
    console.log('Server listening on port 3005');
    });
}
bootstrap();
