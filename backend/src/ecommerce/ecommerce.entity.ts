import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'EcommerceType' })
export class Ecommerce {
  @PrimaryGeneratedColumn('increment', { name: 'idEcommerceType' })
  id: number;

  @Column('varchar', { name: 'type', nullable: true, length: 45 })
  enType?: string | null;

  @Column('varchar', { name: 'type_ar', nullable: true, length: 45 })
  arType?: string | null;

  @Column('text', { name: 'baseURL', nullable: true })
  baseUrl?: string | null;
}
