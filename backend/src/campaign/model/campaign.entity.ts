import { Merchant } from './../../merchant/model/merchant.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

@Entity({ name: 'Campaign' })
export class Campaign {
  @PrimaryColumn({
    name: 'idCampaign',
    type: 'uuid',
    length: 50,
    generated: 'uuid',
  })
  id: string;

  @ManyToOne(() => Merchant)
  @JoinColumn({ name: 'idMerchant' })
  merchant: Merchant;

  @Column({ name: 'title' })
  enTitle: string;

  @Column({ name: 'title_ar' })
  arTitle: string;

  @Column({ name: 'idCampaignType' })
  type: number;

  @Column()
  logo: string;

  @Column({ name: 'idCampaignStatus', type: 'tinyint' })
  status: number;

  @Column({ name: 'description' })
  enDescription: string;

  @Column({ name: 'description_ar' })
  arDescription: string;

  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;
}
