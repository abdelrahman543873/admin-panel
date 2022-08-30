import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from 'typeorm';
import { lowerCaseTransformer } from '../../shared/utils/lower-case-transformer';
import * as bcrypt from 'bcryptjs';
import { Pos } from './pos.entity';
import { Category } from './category.entity';

@Entity()
export class Merchant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({
    unique: true,
    transformer: lowerCaseTransformer,
    type: 'varchar',
  })
  name_ar: string;

  @Column({
    unique: true,
    transformer: lowerCaseTransformer,
    type: 'varchar',
  })
  description: string;

  @Column({ type: 'varchar', default: null, nullable: true })
  description_ar: string;

  @Column({
    unique: true,
    transformer: lowerCaseTransformer,
    type: 'varchar',
  })
  email: string;

  @Column()
  brandKey: string;

  @Column({ type: 'varchar', nullable: false })
  imageUrl: string;

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
