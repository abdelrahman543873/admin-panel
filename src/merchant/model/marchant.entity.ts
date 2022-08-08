import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { POS_TYPE, MERCHANT_CATEGORY } from '../merchant.enum';
import { lowerCaseTransformer } from '../../shared/utils/lower-case-transformer';
import * as bcrypt from 'bcryptjs';

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

  @Column()
  posType: string;

  @Column()
  category: string;

  @Column({
    transformer: {
      to: (value: string) => {
        return bcrypt.hashSync(value, 8);
      },
      from: (value: string) => value,
    },
  })
  password: string;
}
