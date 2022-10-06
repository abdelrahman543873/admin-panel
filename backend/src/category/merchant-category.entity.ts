import { Merchant } from './../merchant/model/merchant.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'MerchantCategory' })
export class MerchantCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Merchant)
  @JoinColumn({ name: 'merchant' })
  merchant: Merchant;

  @Column({ unique: true })
  enTitle: string;

  @Column({ unique: true })
  arTitle: string;

  @Column()
  enDescription: string;

  @Column()
  arDescription: string;

  @Column()
  logo: string;
}
