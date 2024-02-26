import { Module } from '@nestjs/common';
import { ActivityInstanceService } from './activity_instance.service';
import { ActivityInstanceController } from './activity_instance.controller';

@Module({
  controllers: [ActivityInstanceController],
  providers: [ActivityInstanceService],
})
export class ActivityInstanceModule {}
