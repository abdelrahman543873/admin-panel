import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity({ name: 'POS' })
export class Pos {
  @PrimaryGeneratedColumn({ name: 'idPos' })
  id: number;

  @Column({ name: 'token' })
  token: string;

  @Column({ name: 'idStatus' })
  status: number;

  @Column({ name: 'posTitle' })
  title: string;

  @Column({ name: 'apiToken' })
  apiToken: string;

  @Column({ name: 'product_integration' })
  integration: boolean;

  @Column({ name: 'product_module' })
  module: boolean;
}
