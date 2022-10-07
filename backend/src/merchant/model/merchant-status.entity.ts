import { Column, Entity } from 'typeorm';

@Entity({ name: 'MerchantStatus' })
export class MerchantStatus {
  @Column({ name: 'idMerchantStatus', type: 'int', primary: true })
  id: number;

  @Column({ type: 'varchar', name: 'title', length: 45 })
  enTitle: string;
}
