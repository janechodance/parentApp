import { Injectable } from '@nestjs/common';
import { CreateActivityInstanceDto } from './dto/create-activity_instance.dto';
import { UpdateActivityInstanceDto } from './dto/update-activity_instance.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActivityInstance } from './entities/activity_instance.entity';

@Injectable()
export class ActivityInstanceService {
  constructor(
    @InjectRepository(ActivityInstance)
    private readonly activityInstanceRepository: Repository<ActivityInstance>,
  ) {}

  createActivityInstance(
    createActivityInstanceDto: CreateActivityInstanceDto,
  ): Promise<ActivityInstance> {
    const activityInstance: ActivityInstance = new ActivityInstance();
    activityInstance.activity_id = createActivityInstanceDto.activity_id;
    activityInstance.user_id = createActivityInstanceDto.user_id;
    activityInstance.would_repeat = createActivityInstanceDto.would_repeat;
    activityInstance.parent_rating = createActivityInstanceDto.parent_rating;
    activityInstance.complete = createActivityInstanceDto.complete;
    activityInstance.child_rating = createActivityInstanceDto.child_rating;
    activityInstance.difficulty = createActivityInstanceDto.difficulty;
    activityInstance.challanges = createActivityInstanceDto.challanges;
    activityInstance.time_spent = createActivityInstanceDto.time_spent;
    activityInstance.materials_used = createActivityInstanceDto.materials_used;
    activityInstance.notes = createActivityInstanceDto.notes;
    activityInstance.image = createActivityInstanceDto.image;
    activityInstance.date = createActivityInstanceDto.date;
    return this.activityInstanceRepository.save(activityInstance);
  }

  findAll() {
    return this.activityInstanceRepository.find();
  }

  findOne(id: number) {
    return this.activityInstanceRepository.findOneBy({ id });
  }

  findInstancesByActivityAndUser(activity_id: number, user_id: number) {
    return this.activityInstanceRepository.findBy({ activity_id, user_id });
  }

  update(id: number, updateActivityInstanceDto: UpdateActivityInstanceDto) {
    return `This action updates a #${id} activityInstance`;
  }

  remove(id: number) {
    return `This action removes a #${id} activityInstance`;
  }
}
