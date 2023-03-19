import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
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

  @Column({ default: Date() })
  createdAt: string;

  @Column({ default: Date() })
  updatedAt: string;
}
