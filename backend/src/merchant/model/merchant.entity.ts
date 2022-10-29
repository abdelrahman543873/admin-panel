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
import { Pos } from '../../pos/pos.entity';
import { SUBSCRIPTION_STATUS } from '../merchant.enum';
import { MerchantCategory } from '../../merchant-category/merchant-category.entity';
import { Ecommerce } from '../../ecommerce/ecommerce.entity';

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

  @Column({ nullable: true, name: 'posBusinessId' })
  brandKey?: string;

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

  @OneToOne(() => MerchantCategory)
  @JoinColumn({ name: 'idCategory' })
  category: MerchantCategory;

  @Column({
    name: 'idsubscription_status',
    type: 'int',
    transformer: {
      to: (value?: SUBSCRIPTION_STATUS) => {
        return +SUBSCRIPTION_STATUS[value] || 1;
      },
      from: (value: number) => {
        return [...Object.keys(SUBSCRIPTION_STATUS)][value - 1];
      },
    },
  })
  subscriptionStatus: string;

  @Column({ name: 'createdAt' })
  @CreateDateColumn()
  createdAt: Date;

  @OneToOne(() => Ecommerce)
  @JoinColumn({ name: 'idEcommerceType' })
  ecommerceType?: Ecommerce;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @Column({
    name: 'access_token',
    type: 'text',
    nullable: true,
    transformer: {
      to: (value?: string) => {
        return `{ accessToken: "${value}" }`;
      },
      from: (value?: string) => {
        return value ? eval(value) : value;
      },
    },
  })
  accessToken?: string & { accessToken: string };
}
