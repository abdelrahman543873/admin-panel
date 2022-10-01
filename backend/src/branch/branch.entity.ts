import { Merchant } from '../merchant/model/merchant.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'Branch' })
export class Branch {
  @PrimaryGeneratedColumn({ name: 'idBranch', type: 'int' })
  id: number;

  @Column({ name: 'lat', type: 'decimal' })
  latitude: number;

  @Column({ name: 'lng', type: 'decimal' })
  longitude: number;

  @Column({ nullable: true })
  workingHours: string;

  @ManyToOne(() => Merchant)
  @JoinColumn({ name: 'idMerchant' })
  merchant: Merchant;

  //TODO change when city entity is created
  @Column({ nullable: true, name: 'idCity', default: 1 })
  city: number;

  @Column({ name: 'posIdBranch_branch' })
  brandKey: string;

  @Column({ name: 'district', nullable: true })
  enDistrict: string;

  @Column({ name: 'district_ar', nullable: true })
  arDistrict: string;

  @Column({ nullable: true })
  managerName: string;

  @Column({ nullable: true })
  managerPhoneNumber: string;

  @CreateDateColumn({ name: 'branch_createdAt', type: 'timestamp' })
  createdAt: Date;

  @Column({ type: 'tinyint', default: 0 })
  hasPickup: boolean;

  @Column({ type: 'tinyint', default: 0 })
  isActive: boolean;

  //TODO check soft delete feature of typeorm
  @Column({ type: 'tinyint', default: 0 })
  isDeleted: boolean;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  location: string;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @Column({ name: 'nameEn' })
  enName: string;

  @Column({ name: 'nameAr' })
  arName: string;

  @Column({ name: 'workingHr', nullable: true, type: 'json' })
  enWorkingHours: Record<any, any>;

  @Column({ name: 'workingHr_ar', nullable: true, type: 'json' })
  arWorkingHours: Record<any, any>;
}
