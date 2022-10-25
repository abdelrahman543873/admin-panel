import { Branch } from '../branch/branch.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'Device' })
export class Device {
  @PrimaryGeneratedColumn({ name: 'idDevice' })
  id: number;

  @Column({ type: 'varchar', length: 45 })
  activationCode: string;

  @ManyToOne(() => Branch)
  @JoinColumn({ name: 'idBranch' })
  branch: Branch;

  @Column({ name: 'posIdBranch' })
  integrationId: string;

  @Column({ type: 'tinyint' })
  activationStatus: number;

  @Column()
  token: string;

  @Column({ name: 'deviceModel' })
  model: string;

  @Column({ type: 'varchar', length: 45 })
  appVersion: string;

  @Column({ name: 'deviceOS', type: 'varchar', length: 45 })
  os: string;

  @Column({ name: 'deviceOSVersion', type: 'varchar', length: 45 })
  osVersion: string;

  @CreateDateColumn({ name: 'device_createdAt' })
  createdAt: Date;

  @CreateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;
}
