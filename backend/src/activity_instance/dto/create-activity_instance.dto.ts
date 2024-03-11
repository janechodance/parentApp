import { IsBoolean, IsDateString, IsInt, IsNotEmpty } from 'class-validator';

export class CreateActivityInstanceDto {
  @IsNotEmpty()
  @IsInt()
  activity_id: number;

  @IsNotEmpty()
  @IsInt()
  user_id: number;

  @IsBoolean()
  would_repeat: boolean;

  @IsInt()
  parent_rating: number;

  @IsBoolean()
  complete: boolean;

  @IsInt()
  child_rating: number;

  @IsInt()
  difficulty: number;

  challanges: string[];

  @IsInt()
  time_spent: number;

  materials_used: string[];

  notes: string;

  image: string[];

  @IsDateString()
  date: Date;
}
