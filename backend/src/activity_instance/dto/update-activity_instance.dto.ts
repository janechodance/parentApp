import { PartialType } from '@nestjs/mapped-types';
import { CreateActivityInstanceDto } from './create-activity_instance.dto';

export class UpdateActivityInstanceDto extends PartialType(CreateActivityInstanceDto) {}
