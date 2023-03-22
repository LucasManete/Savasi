import { Request } from 'src/requests/entities/request.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
@Entity({ name: 'costumers' })
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  address: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  password: string;

  @Column({ default: '' })
  recoveringToken: string;

  @Column({ default: '' })
  recoveringTokenExpiration: string;

  @Column({ default: false })
  isAdmin: boolean;

  @CreateDateColumn({ select: true })
  createdAt: Date;

  @UpdateDateColumn({ select: true })
  updatedAt: Date;

  @DeleteDateColumn({ select: true })
  deletedAt: Date;

  @OneToMany(type => Request, customer => Customer)
  request: Request[]
}
