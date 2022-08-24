import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Branch } from './branch.entity';

@Entity()
export class Device {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  activationCode: number;

  @ManyToOne(() => Branch)
  @JoinColumn()
  branch: number;
}
