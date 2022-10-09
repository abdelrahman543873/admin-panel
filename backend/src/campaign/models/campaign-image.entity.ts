import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { Campaign } from './campaign.entity';

@Entity('CampaignImage')
export class CampaignImage {
  @OneToOne(() => Campaign, (campaign) => campaign.image)
  @Column({ primary: true, name: 'idCampaign', length: 50, type: 'varchar' })
  @JoinColumn({ name: 'idCampaign' })
  id: Campaign;

  @Column()
  imageUrl: string;
}
