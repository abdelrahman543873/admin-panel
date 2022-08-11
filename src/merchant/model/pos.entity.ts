import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Pos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  type: string;
}
