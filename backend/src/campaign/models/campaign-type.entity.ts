import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'CampaignType' })
export class CampaignType {
  @PrimaryGeneratedColumn({ name: 'idCampaignType' })
  id: number;

  @Column('varchar', { name: 'type_en', length: 45 })
  enName: string;

  @Column('varchar', { name: 'type_ar', nullable: true, length: 45 })
  arName: string | null;

  @Column('text', { name: 'icon', nullable: true })
  icon: string | null;

  @Column('text', { name: 'icon_svg', nullable: true })
  iconSvg: string | null;

  @Column('text', { name: 'icon_pdf', nullable: true })
  iconPdf: string | null;

  @Column('text', { name: 'use_steps', nullable: true })
  useSteps: string | null;

  @Column('text', { name: 'use_steps_ar', nullable: true })
  useStepsAr: string | null;

  @Column('text', { name: 'terms_and_conditions', nullable: true })
  termsAndConditions: string | null;

  @Column('text', { name: 'terms_and_conditions_ar', nullable: true })
  termsAndConditionsAr: string | null;

  @Column('text', { name: 'image', nullable: true })
  image: string | null;

  @Column('text', { name: 'html_use_steps', nullable: true })
  htmlUseSteps: string | null;

  @Column('text', { name: 'html_use_steps_ar', nullable: true })
  htmlUseStepsAr: string | null;

  @Column('text', { name: 'html_terms_and_conditions', nullable: true })
  htmlTermsAndConditions: string | null;

  @Column('text', { name: 'html_terms_and_conditions_ar', nullable: true })
  htmlTermsAndConditionsAr: string | null;
}
