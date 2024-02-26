import { Test, TestingModule } from '@nestjs/testing';
import { ActivityInstanceService } from './activity_instance.service';

describe('ActivityInstanceService', () => {
  let service: ActivityInstanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActivityInstanceService],
    }).compile();

    service = module.get<ActivityInstanceService>(ActivityInstanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
