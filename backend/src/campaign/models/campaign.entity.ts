import { Merchant } from '../../merchant/model/merchant.entity';
import { CampaignType } from './campaign-type.entity';
import { CampaignImage } from './campaign-image.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';

@Entity({ name: 'Campaign' })
export class Campaign {
  @PrimaryColumn({
    name: 'idCampaign',
    type: 'uuid',
    length: 50,
    generated: 'uuid',
    primary: true,
  })
  id: string;

  @ManyToOne(() => Merchant)
  @JoinColumn({ name: 'idMerchant' })
  merchant: Merchant;

  @Column({ name: 'title' })
  enTitle: string;

  @Column({ name: 'title_ar' })
  arTitle: string;

  @ManyToOne(() => CampaignType)
  @JoinColumn([{ name: 'idCampaignType' }])
  type: CampaignType;

  @Column({ nullable: true })
  logo: string;

  @Column({ name: 'idCampaignStatus', type: 'tinyint' })
  status: number;

  @Column({ name: 'description' })
  enDescription: string;

  @Column({ name: 'description_ar' })
  arDescription: string;

  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @OneToOne(() => CampaignImage, (campaign) => campaign.id)
  image: CampaignImage;
}
