import { Module } from '@nestjs/common';
import { ActivityInstanceService } from './activity_instance.service';
import { ActivityInstanceController } from './activity_instance.controller';
import { ActivityInstance } from './entities/activity_instance.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ActivityInstance])],
  controllers: [ActivityInstanceController],
  providers: [ActivityInstanceService],
})
export class ActivityInstanceModule {}
