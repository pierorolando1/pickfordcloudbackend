import { Controller, Get, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { response, Response } from 'express'
import { diskStorage } from 'multer';
import { extname, basename } from 'path';
import { uid } from 'uid'

@Controller('upload')
export class UploadController {

    @Post('image')
    @UseInterceptors(
        FileInterceptor("image", {
            storage: diskStorage({
                destination: './upload/images',
                filename: (req, file, cb) => {
                    const newName = basename(file.originalname, extname(file.originalname)) + '-' + uid(7)
                    console.log(file)
                    cb(null, `${newName}${extname(file.originalname)}`)
                }
            })
        })
    )
    uploadSingleImage(@UploadedFile() file: Express.Multer.File, @Res() res: Response){
        console.log(file)
        
        return res.json({
            ok: true,
            url: `http://pickfordcloudbackend.vercel.app:4000/upload/images/${file.filename}`
        })
    }

    @Get('image')
    hello(){
        return 'hello'
    }
}
