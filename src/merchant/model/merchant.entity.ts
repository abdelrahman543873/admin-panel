import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { lowerCaseTransformer } from '../../shared/utils/lower-case-transformer';
import * as bcrypt from 'bcryptjs';
import { Pos } from './pos.entity';
import { Category } from './category.entity';

@Entity()
export class Merchant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  arName: string;

  @Column({
    unique: true,
    transformer: lowerCaseTransformer,
  })
  enName: string;

  @Column({
    unique: true,
    transformer: lowerCaseTransformer,
  })
  enSlogan: string;

  @Column({ unique: true })
  arSlogan: string;

  @Column({
    unique: true,
    transformer: lowerCaseTransformer,
  })
  accountEmail: string;

  @Column()
  brandKey: string;

  @Column()
  logo: string;

  @Column({
    select: false,
    transformer: {
      to: (value: string) => {
        return bcrypt.hashSync(value, 8);
      },
      from: (value: string) => value,
    },
  })
  password: string;

  @OneToOne(() => Pos)
  @JoinColumn()
  pos: number;

  @OneToOne(() => Category)
  @JoinColumn()
  category: number;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
