import { Branch } from './../../branch/branch.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

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
