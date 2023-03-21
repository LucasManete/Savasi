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
export class Costumer {
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

  @OneToMany(() => Request, (request) => request.custumer, { nullable: false, eager: true })
  request: Request[]
}
