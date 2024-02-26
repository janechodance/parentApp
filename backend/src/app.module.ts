import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { Users } from './user/entities/user.entity';
import { ActivityModule } from './activity/activity.module';
import { Activity } from './activity/entities/activity.entity';
import { SkillModule } from './skill/skill.module';
import { Skill } from './skill/entities/skill.entity';
import { ActivityInstanceModule } from './activity_instance/activity_instance.module';
import { ActivityInstance } from './activity_instance/entities/activity_instance.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: '',
      username: 'jane',
      entities: [Users, Activity, Skill, ActivityInstance],
      database: 'parentApp',
      synchronize: true,
      logging: true,
    }),
    UserModule,
    ActivityModule,
    SkillModule,
    ActivityInstanceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
