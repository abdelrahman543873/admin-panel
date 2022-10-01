import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { lowerCaseTransformer } from '../../shared/utils/lower-case-transformer';
import * as bcrypt from 'bcryptjs';
import { Pos } from './pos.entity';
import { randomUUID } from 'crypto';

@Entity({ name: 'Merchant' })
export class Merchant {
  @PrimaryGeneratedColumn({ name: 'idMerchant' })
  id: number;

  @Column({ type: 'varchar', nullable: false, name: 'name', unique: true })
  enName: string;

  @Column({
    unique: true,
    transformer: lowerCaseTransformer,
    name: 'name_ar',
  })
  arName: string;

  @Column({
    transformer: lowerCaseTransformer,
    name: 'description',
  })
  enDescription: string;

  @Column({ default: null, nullable: true, name: 'description_ar' })
  arDescription: string;

  @Column({
    unique: true,
    transformer: lowerCaseTransformer,
  })
  email: string;

  @Column({ nullable: true })
  brandKey: string;

  @Column({ nullable: true })
  link: string;

  @Column({ type: 'varchar', nullable: false })
  imageUrl: string;

  @Column({ name: 'token' })
  token: string;

  @Column({
    select: false,
    transformer: {
      to: (value: string) => {
        return bcrypt.hashSync(value, 8);
      },
      from: (value: string) => value,
    },
  })
  password: string;

  @Column({ name: 'phoneNumber', type: 'varchar', length: 14 })
  phoneNumber: string;

  @OneToOne(() => Pos)
  @JoinColumn({ name: 'idPos' })
  pos: Pos;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
