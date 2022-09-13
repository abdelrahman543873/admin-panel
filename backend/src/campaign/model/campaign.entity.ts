import { Merchant } from './../../merchant/model/merchant.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Campaign {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Merchant)
  @JoinColumn()
  idMerchant: Merchant;

  @Column()
  title: string;

  @Column()
  title_ar: string;

  @Column()
  idCampaignType: number;

  @Column()
  logo: string;

  @Column()
  idCampaignStatus: number;
}
