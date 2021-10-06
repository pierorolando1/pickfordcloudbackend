import { Test, TestingModule } from '@nestjs/testing';
import { UploadController } from './upload.controller';
import image from '../test-image.jpg'

describe('UploadController', () => {
  let controller: UploadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UploadController],
    }).compile();

    controller = module.get<UploadController>(UploadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  })

  it('response with hello when call /image', () => {
    expect(controller.hello()).toBe('hello')
  })

  //TODO: it('response with hello when call /image', () => {
  //   expect(controller.uploadSingleImage()).toBe('hello')
  // })

})
