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

  create(createActivityInstanceDto: CreateActivityInstanceDto) {
    return 'This action adds a new activityInstance';
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
