import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UploadController } from './upload/upload.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      serveRoot: '/upload',
      rootPath: join(__dirname, '..', 'upload')
    })
  ],
  controllers: [AppController, UploadController],
  providers: [AppService],
})
export class AppModule {}
