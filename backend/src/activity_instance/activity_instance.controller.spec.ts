import { Test, TestingModule } from '@nestjs/testing';
import { ActivityInstanceController } from './activity_instance.controller';
import { ActivityInstanceService } from './activity_instance.service';

describe('ActivityInstanceController', () => {
  let controller: ActivityInstanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActivityInstanceController],
      providers: [ActivityInstanceService],
    }).compile();

    controller = module.get<ActivityInstanceController>(ActivityInstanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
