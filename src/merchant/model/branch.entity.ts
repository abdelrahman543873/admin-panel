import { Merchant } from './merchant.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Branch {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  arName: string;

  @Column()
  enName: string;

  @Column({ type: 'date' })
  activationDate: string;

  @Column()
  long: number;

  @Column()
  lat: number;

  @ManyToOne(() => Merchant)
  @JoinColumn()
  merchant: number;
}
