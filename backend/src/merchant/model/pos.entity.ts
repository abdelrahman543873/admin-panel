import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MerchantStatus } from './merchant-status.entity';

@Entity({ name: 'POS' })
export class Pos {
  @PrimaryGeneratedColumn({ name: 'idPos' })
  id: number;

  @Column({ name: 'token' })
  token: string;

  @OneToOne(() => MerchantStatus, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'idStatus' })
  status: MerchantStatus;

  @Column({ name: 'posTitle', length: 45, type: 'varchar' })
  title: string;

  @Column({ name: 'apiToken' })
  apiToken: string;

  @Column({ name: 'product_integration' })
  integration: boolean;

  @Column({ name: 'product_module' })
  module: boolean;
}
