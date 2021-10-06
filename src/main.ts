import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Request, Response } from 'express'
import path from 'path'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  await app.listen(4000)
  console.log("Server on port 4000")
}

bootstrap();