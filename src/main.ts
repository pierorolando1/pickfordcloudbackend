import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Request, Response } from 'express'
import path from 'path'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  await app.listen(80)
  console.log("Server on port 80")
}

bootstrap();