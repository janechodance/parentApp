import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ActivityInstance {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'int' })
  activity_id: number;
  @Column({ type: 'int' })
  user_id: number;
  @Column({ type: 'boolean' })
  would_repeat: boolean;
  @Column({ type: 'smallint' })
  parent_rating: number;
  @Column({ type: 'boolean' })
  complete: boolean;
  @Column({ type: 'smallint' })
  child_rating: number;
  @Column({ type: 'smallint' })
  difficulty: number;
  @Column({ type: 'text', array: true, nullable: true })
  challanges: string[];
  @Column({ type: 'smallint' })
  time_spent: number;
  @Column({ type: 'text', array: true, nullable: true })
  materials_used: string[];
  @Column({ type: 'text', nullable: true })
  notes: string;
  @Column({ type: 'text', array: true, nullable: true })
  image: string[];
}
