import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'costumers' })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  price: number;

  @Column({ nullable: false })
  description: string;

  @Column({ default: Date() })
  createdAt: string;

  @Column({ default: Date() })
  updatedAt: string;
}
