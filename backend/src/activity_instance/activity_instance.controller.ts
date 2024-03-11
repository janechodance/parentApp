import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ActivityInstanceService } from './activity_instance.service';
import { CreateActivityInstanceDto } from './dto/create-activity_instance.dto';
import { UpdateActivityInstanceDto } from './dto/update-activity_instance.dto';

@Controller('activity_instance')
export class ActivityInstanceController {
  constructor(
    private readonly activityInstanceService: ActivityInstanceService,
  ) {}

  @Post()
  create(@Body() createActivityInstanceDto: CreateActivityInstanceDto) {
    return this.activityInstanceService.createActivityInstance(
      createActivityInstanceDto,
    );
  }

  @Get()
  findAll() {
    return this.activityInstanceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activityInstanceService.findOne(+id);
  }

  @Get('/:activity_id/:user_id')
  find(
    @Param('activity_id') activity_id: number,
    @Param('user_id') user_id: number,
  ) {
    return this.activityInstanceService.findInstancesByActivityAndUser(
      activity_id,
      user_id,
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateActivityInstanceDto: UpdateActivityInstanceDto,
  ) {
    return this.activityInstanceService.update(+id, updateActivityInstanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activityInstanceService.remove(+id);
  }
}
