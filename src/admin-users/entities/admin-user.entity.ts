import {
    BaseEntity,
    BeforeInsert,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import * as bcrypt from 'bcryptjs';
  
  @Entity()
  export class AdminUser extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ unique: true })
    email: string;

    @Column()
    name: string;
  
    @Column()
    password: string;
  
    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
  
    @BeforeInsert()
    async hashPassword() {
      this.password = await bcrypt.hash(this.password, 8);
    }
  
    async validatePassword(password: string): Promise<boolean> {
      return bcrypt.compare(password, this.password);
    }
  }