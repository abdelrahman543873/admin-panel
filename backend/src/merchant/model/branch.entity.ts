import { Merchant } from './merchant.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Branch {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  arName: string;

  @Column()
  enName: string;

  @Column({
    type: 'datetime',
    transformer: {
      to: (value: Date) => {
        return value.toISOString();
      },
      from: (value: Date) => value,
    },
    nullable: true,
  })
  activationDate: Date;

  @Column()
  long: number;

  @Column()
  lat: number;

  @ManyToOne(() => Merchant)
  @JoinColumn()
  merchant: Merchant;

  @Column()
  @CreateDateColumn()
  createdAt: Date;
}
