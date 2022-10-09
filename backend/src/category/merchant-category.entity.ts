import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'MerchantCategory' })
export class MerchantCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, name: 'titleEn' })
  enTitle: string;

  @Column({ unique: true, name: 'titleAr' })
  arTitle: string;

  @Column({ name: 'descriptionEn', nullable: true })
  enDescription: string;

  @Column({ name: 'descriptionAr', nullable: true })
  arDescription: string;

  @Column({ nullable: true })
  logo: string;
}
