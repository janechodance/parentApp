import { Injectable } from '@nestjs/common';
import { CreateActivityInstanceDto } from './dto/create-activity_instance.dto';
import { UpdateActivityInstanceDto } from './dto/update-activity_instance.dto';

@Injectable()
export class ActivityInstanceService {
  create(createActivityInstanceDto: CreateActivityInstanceDto) {
    return 'This action adds a new activityInstance';
  }

  findAll() {
    return `This action returns all activityInstance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} activityInstance`;
  }

  update(id: number, updateActivityInstanceDto: UpdateActivityInstanceDto) {
    return `This action updates a #${id} activityInstance`;
  }

  remove(id: number) {
    return `This action removes a #${id} activityInstance`;
  }
}
