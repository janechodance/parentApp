import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Activity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 30 })
  name: string;
  @Column({ type: 'smallint' })
  setup_time: number;
  @Column({ type: 'smallint' })
  active_time: number;
  @Column({ type: 'text' })
  description: string;
  @Column({ type: 'boolean' })
  expandable: boolean;
  @Column({ type: 'int', array: true })
  secondary_skills_ids: number[];
  @Column({ type: 'text' })
  instructions: string;
  @Column({ type: 'text' })
  modifications: string;
  @Column({ type: 'varchar', length: 50 })
  posted_by: string;
  @Column({ type: 'varchar', length: 50 })
  reviewed_by: string;
  @Column({ type: 'text' })
  image: string;
  @Column({ type: 'int' })
  lead_physical_level_id: number;
  @Column({ type: 'int', array: true })
  primary_skills_ids: number[];
  @Column({ type: 'int', array: true })
  environment_ids: number[];
}
